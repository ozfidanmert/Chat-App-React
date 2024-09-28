import React, { useContext, useEffect, useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../config/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import upload from '../../lib/upload'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const ProfileUpdate = () => {

  const navigate = useNavigate()

  const [image, setImage] = useState(false)
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [uid, setUid] = useState("")
  const [prevImage, setPrevImage] = useState("")

  const { setUserData } = useContext(AppContext)



  const getUserDocSnap = async (uid) => {
    const docRef = doc(db, "users", uid)
    return await getDoc(docRef)
  }

  const profileUpdate = async (event) => {
    event.preventDefault();

    const docRef = doc(db, "users", uid)
    const docSnap = await getUserDocSnap(uid)

    try {

      if (!image && !prevImage) {
        toast.error("Upload profile picture")
      }


      toast.info("Kaydediliyor... Lütfen Bekleyiniz...")
      if (image) {
        const imgUrl = await upload(image);
        setPrevImage(imgUrl)
        await updateDoc(docRef, {
          avatar: imgUrl,
          bio: bio,
          name: name
        })
      }
      else {
        await updateDoc(docRef, {
          bio: bio,
          name: name
        })
      }

      setUserData(docSnap.data())
      navigate('/chat')
      toast.success("Profilin düzenlendi!")

    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }

  }

  const profileImageDelete = async (event) => {

    event.preventDefault()
    const docRef = doc(db, "users", uid)
    const docSnap = await getUserDocSnap(uid)

    if (docSnap.data().avatar) {
      const con = confirm("Profil fotoğrafın kaldırılsın mı?")
      if (con) {
        await updateDoc(docRef, {
          avatar: ""
        })
        toast.info("Profil fotoğrafın kaldırıldı!")
      }
      else {
        return
      }
    }
  }


  useEffect(() => {

    //* her kimlik doğrulama durumu değiştiğinde çalışır
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid)
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.data().name) {
          setName(docSnap.data().name)
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio)
        }
        if (docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar)
        }
      }

    })
  }, [])


  return (
    <div className='profilee'>
      <div className="profile-container">

        <form onSubmit={profileUpdate} >
          <h3>Profile Details</h3>

          <label htmlFor="avatar">
            <input onChange={(e) => setImage(e.target.files[0])} id='avatar' type="file" accept='.jpeg, .png, .jpg' hidden />
            <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="avatar-icon" />
            <p>Profil Resmini Yükle</p>
          </label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Your name' required />
          <textarea onChange={(e) => setBio(e.target.value)} value={bio} placeholder='Write profile bio' required></textarea>
          <button type="submit">Kaydet</button>

        </form>

        <div className='profile-edit'>
          <img className='profile-pic' src={image ? URL.createObjectURL(image) : prevImage ? prevImage : assets.logo_icon} alt="" />
          <p className='profile-delete' onClick={profileImageDelete}>Profil Resmini Kaldır</p>
        </div>

      </div>
    </div>
  )
}

export default ProfileUpdate