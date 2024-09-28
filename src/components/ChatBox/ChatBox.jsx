import React, { useContext, useEffect, useState } from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
import upload from '../../lib/upload'
import { AppContext } from '../../context/AppContext'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { toast } from 'react-toastify'
import { ThreeDot } from 'react-loading-indicators'

const ChatBox = () => {

  const { userData, chatUser, setMessages, messagesId, messages, isOnline, inputClickControl, chatVisible, setChatVisible } = useContext(AppContext)

  const [input, setInput] = useState("")
  const [messageLoading, setMessageLoading] = useState(true)



  const sendMessage = async () => {

    if (!input || !messagesId) {
      toast.info("Boş Mesaj Gönderilemez!")
      return
    }

    setInput("")
    try {

      if (input && messagesId) {

        await updateDoc(doc(db, 'messages', messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date()
          })
        })

        const userIDs = [chatUser.rId, userData.id]

        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, 'chats', id)
          const userChatSnapshot = await getDoc(userChatsRef)

          if (userChatSnapshot.exists()) {
            const userChatData = userChatSnapshot.data().chatsData
            const chatIndex = userChatData.findIndex((c) => c.messageId === messagesId)
            userChatData[chatIndex].lastMessage = input.length > 30 ? input.slice(0, 30) + "..." : input.slice(0, 30)
            userChatData[chatIndex].updatedAt = Date.now()

            if (userChatData[chatIndex].rId === userData.id) {
              userChatData[chatIndex].messageSeen = false
            }

            await updateDoc(userChatsRef, {
              chatsData: userChatData
            })

          }
        })

      }
    } catch (error) {
      console.error(error.message)
      toast.error(error.message)
    }
  }


  const sendImage = async (e) => {

    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    try {
      toast.info("Resim Gönderiliyor...")
      const fileUrl = await upload(e.target.files[0])

      if (fileUrl && messagesId) {

        await updateDoc(doc(db, 'messages', messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            image: fileUrl,
            createdAt: new Date()
          })
        })

        const userIDs = [chatUser.rId, userData.id]

        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, 'chats', id)
          const userChatSnapshot = await getDoc(userChatsRef)

          if (userChatSnapshot.exists()) {
            const userChatData = userChatSnapshot.data().chatsData
            const chatIndex = userChatData.findIndex((c) => c.messageId === messagesId)
            userChatData[chatIndex].lastMessage = "Resim"
            userChatData[chatIndex].updatedAt = Date.now()

            if (userChatData[chatIndex].rId === userData.id) {
              userChatData[chatIndex].messageSeen = false
            }

            await updateDoc(userChatsRef, {
              chatsData: userChatData
            })

          }
        })
      }

      e.target.value = null

    } catch (error) {
      console.error(error.message)
    }
  }


  useEffect(() => {
    if (messagesId) {
      setMessageLoading(true)
      const unSub = onSnapshot(doc(db, 'messages', messagesId), (res) => {
        setMessages(res.data().messages.reverse())
        setMessageLoading(false)
      })
      console.log(messages["image"])

      return () => {
        unSub()
      }
    }
  }, [messagesId])



  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage(); // Mesajı gönder
    }

  }


  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    if (hour > 12) {
      return hour - 12 + ":" + minute + " PM"
    }
    else {
      return hour + ":" + minute + " AM"
    }
  }


  return chatUser ? (
    <div className={`chat-box ${chatVisible ? '' : 'hidden'}`}>

      <div className="chat-user">
        <img className="profile" src={chatUser.userData.avatar ? chatUser.userData.avatar : assets.avatar_icon} alt="" />
        <p>{chatUser.userData.name}
          {isOnline ? <img className='dot' src={assets.green_dot} alt="online" /> : null}
        </p>
        <img src={assets.help_icon} className='help' alt="" />
        {chatVisible ? <img onClick={() => setChatVisible(false)} src={assets.arrow_icon} className='arrow' alt="" /> : null}
      </div>

      <div className="chat-msg">
        {
          messageLoading ?
            (
              <div className="chat-loading" >
                <ThreeDot variant="pulsate" color="#5cadf4" size="medium" text="Mesajlar Yükleniyor..." textColor="gray" />
              </div>
            ) : messages.length > 0 ?
              (
                messages.map((msg, index) => (
                  <div key={index} className={msg.sId === userData.id ? "s-msg" : "r-msg"}>
                    {msg["image"]
                      ? <img
                        style={{ cursor: 'pointer', margin: '15px 0' }}
                        onClick={() => window.open(msg["image"])}
                        className='msg-img' src={msg.image} />
                      : <p className="msg">{msg.text}</p>
                    }
                    <div>
                      <img
                        src={
                          msg.sId === userData.id
                            ? (userData.avatar ? userData.avatar : assets.avatar_icon)
                            : (chatUser.userData.avatar ? chatUser.userData.avatar : assets.avatar_icon)
                        } />
                      <p >{convertTimestamp(msg.createdAt)}</p>
                    </div>
                  </div>
                ))
              )
              : <div className="no-messages">
                <p >Henüz mesaj yok</p>
              </div>
        }
      </div>

      <div className="chat-input">
        <textarea rows={3} onFocus={inputClickControl} className='input' onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)} value={input} placeholder='Bir mesaj gönder...' type="text" />

        <input onChange={sendImage} type="file" id='image' accept='image/png, image/jpeg' hidden />

        <div className='icons'>
          <label htmlFor="image">
            <img className='gallery' src={assets.gallery_icon} alt="" />
          </label>
          <img onClick={sendMessage} className='send' src={assets.send_button} alt="" />
        </div>

      </div>

    </div>
  )
    : <div className={`chat-welcome ${chatVisible ? '' : 'hidden'} `}>
      <img src={assets.logo_icon} alt="" />
      <p>Chat anytime, anywhere</p>
    </div>
}

export default ChatBox