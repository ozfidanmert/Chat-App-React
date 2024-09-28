import React, { useContext, useEffect, useState } from 'react'
import './Chat.css'
import LefSidebar from '../../components/LeftSidebar/LefSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import { AppContext } from '../../context/AppContext'
import { Atom } from 'react-loading-indicators'

const Chat = () => {

  const { chatData, userData, loading, setLoading } = useContext(AppContext)
  

  useEffect(() => {
    if (userData) {
      setLoading(false)
    }
  },[userData])

  return (
    <div className='chat'>
      {
        loading ? <Atom color="#24DE24" size="large" text="LOADING..." textColor="" />
          : <div className="chat-container">
            <LefSidebar />
            <ChatBox />
            <RightSidebar />
          </div>
      }

    </div>
  )
}

export default Chat