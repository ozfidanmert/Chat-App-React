import React, { useContext, useEffect, useState } from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { ThreeDot } from 'react-loading-indicators'

const RightSidebar = () => {

  const { setUserData, setChatUser, setChatData, chatUser, messages, userData, logouts, isOnline } = useContext(AppContext)

  const [msgImages, setMsgImages] = useState([])
  const [imageLoading, setImageLoading] = useState(false)



  useEffect(() => {
    const loadImages = () => {
      setImageLoading(false) // Yüklemeye başlıyor

      if (messages && messages.length > 0) {
        const tempVar = messages
          .filter((msg) => msg.image)  // image içeren mesajları filtreler
          .map((msg) => msg.image)     // image linklerini bir diziye çeker

        setMsgImages(tempVar)          // state'e atar
      } else {
        setMsgImages([])               // Eğer mesaj yoksa, boş bir dizi
      }

      setImageLoading(true)           // Yükleme tamamlandı
    }

    loadImages()
  }, [messages])

  return chatUser ? (

    <div className='rs'>
      <div className="rs-profile">
        <img src={chatUser.userData.avatar ? chatUser.userData.avatar : assets.avatar_icon} />
        <h3>
          {Date.now() - chatUser?.userData?.lastseen <= 70000
            ? <img className='dot' src={assets.green_dot} />
            : null} {chatUser.userData.name}</h3>
        <p>{chatUser.userData.bio}</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <hr />
        {
          msgImages?.length > 0 ? (
            <div>
              {
                msgImages?.map((item, i) => (
                  <img onClick={() => window.open(item)} key={i} src={item} alt={`msg-image-${i}`} />
                ))
              }
            </div>
          )
            : (
              <p className='mediainfo'>Media bulunamadı.</p>
            )
        }
      </div>
    </div>
  ) : (
    <div className='rs'>
      <div className="rs-profile">
        <img src={userData?.avatar ? userData?.avatar : assets.avatar_icon} />
        <h3> {isOnline ? <img className='dot' src={assets.green_dot} alt="online" /> : null} {userData?.name}</h3>
        <p>{userData?.bio}</p>
      </div>
      <hr />
      <div className="rs-media">
      </div>
      <button onClick={logouts}>Çıkış</button>
    </div>
  )
}

export default RightSidebar
