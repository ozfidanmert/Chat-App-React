import React, { useContext, useState } from 'react'
import './LefSidebar.css'
import assets from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { db } from '../../config/firebase'
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import { ThreeDot } from 'react-loading-indicators'


const LefSidebar = () => {


  const navigate = useNavigate()
  const { userData, setMessages, chatData, messagesId, setChatUser, setMessagesId, chatLoading, logouts, messageSeen, chatVisible, setChatVisible } = useContext(AppContext)

  const [user, setUser] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [cooldown, setCooldown] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [selectedId, setSelectedId] = useState(null)


  const inputHandler = async (e) => {
    try {

      const inputValue = e.target.value.toLowerCase()
      setSearchInput(inputValue)

      if (inputValue) {
        setShowSearch(true)

        // Tüm kullanıcıları alıyoruz
        const userRef = collection(db, 'users')

        //* query fonk. ile sorgu oluşturduk. Where ile "username", input'a eşitse getirir
        const q = query(
          userRef,
          where("username", ">=", inputValue),
          where("username", "<=", inputValue + '\uf8ff'),
        );
        const querySnap = await getDocs(q);

        if (!querySnap.empty) {
          const users = [];

          querySnap.forEach((doc) => {
            if (doc.data().id !== userData.id) {
              let userExist = chatData.some(chat => chat.rId === doc.data().id)

              if (!userExist) {
                users.push(doc.data());
              }
            }
          });

          setUser(users.length > 0 ? users : null);
        } else {
          setUser(null);
        }

      } else {
        setShowSearch(false);
      }

    } catch (error) {
      console.error(error.message)
    }
  }


  const addChat = async (selectedUser) => {
    if (cooldown) {
      toast.info("İşlemler devam ediyor...")
      return;
    }

    if (loading) {
      toast.info("Yükleniyor...")
      return;
    }

    setLoading(true)

    const userControl = chatData?.some(chat => chat.rId === selectedUser.id)
    if (userControl) {
      setLoading(false)
      toast.error("Bu kullanıcı sohbetinde mevcut.")
      return;
    }

    setCooldown(true)

    try {

      const messagesRef = collection(db, "messages")
      const chatsRef = collection(db, "chats")

      const newMessageRef = doc(messagesRef);

      //* yeni messages oluşturur
      await setDoc(newMessageRef, {
        //*server tarihi 
        createAt: serverTimestamp(),
        messages: []
      })

      //*arrayUnion: bir kullanıcıyla olan sohbetlere yeni mesaj eklenirken, eski mesajlar korunur ve yalnızca yeni mesaj eklenir.

      await updateDoc(doc(chatsRef, selectedUser.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: userData.id,
          updatedAt: Date.now(),
          messageSeen: true
        })
      })

      await updateDoc(doc(chatsRef, userData.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: selectedUser.id,
          updatedAt: Date.now(),
          messageSeen: true
        })
      })

      setSearchInput("")
      setShowSearch(false);
      setUser(null)

    } catch (error) {
      console.error(error.message)

    } finally {
      //* yükleme işlemi tamamlandığında
      toast.success(`'${selectedUser.username}' Arkadaş olarak eklendi!`)
      setLoading(false);

      setTimeout(() => {
        setCooldown(false)
      }, 5000);

      return
    }
  }

  const setChat = async (item) => {
    messageSeen(item)
    setChatUser(null)
    setChatUser(item)
    setMessagesId(item.messageId)
    setSelectedId(item.userData.id)
    setChatVisible(true)

  }

  const profileData = () => {
    setChatUser(null)
  }


  return (

    <div className={`ls ${chatVisible ? "hidden" : ""} `}>

      <div className="ls-top">

        <div className="ls-nav">
          <img onClick={profileData} src={assets.logo} className='logo' />
          <div className="menu">
            <img src={assets.menu_icon} />
            <div className="sub-menu">
              <p onClick={() => navigate('/profile')}>Profil Düzenle</p>
              <hr />
              <p onClick={logouts}>Çıkış</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <img src={assets.search_icon} />
          <input onChange={inputHandler} value={searchInput} type="text" placeholder='Search here..' />
        </div>

      </div>

      <div className="ls-list">
        {
          showSearch && user
            ? user.map((u, i) => (
              <div key={i} onClick={() => addChat(u)} className="friends add-user">
                <img className='user-img' src={u.avatar ? u.avatar : assets.avatar} />
                <div className='friends-content'>
                  <p>{u.name}</p>
                </div>
              </div>
            ))
            : showSearch && !user ?
              <div className='user-control'>Kullanıcı Bulunamadı</div>
              : chatLoading ? (
                <div className="user-loading" >
                  <ThreeDot variant="bob" color="#5cadf4" size="small" text="Yükleniyor..." textColor="#efefef" />
                </div>
              ) : (
                chatData?.map((item, i) => (
                  <div
                    onClick={() => setChat(item)} key={i}
                    className={`friends ${item.messageSeen || item.messageId === messagesId ? "" : "border"} ${item.userData.id == selectedId ? 'active' : ''}`}>
                    <img className='user-img' src={item.userData.avatar ? item.userData.avatar : assets.avatar_icon} alt="" />
                    <div className='friends-content'>
                      <p>{item.userData.name}</p>
                      <span>{item.lastMessage}</span>
                    </div>
                  </div>
                ))
              )

        }

      </div>
    </div>
  )
}

export default LefSidebar