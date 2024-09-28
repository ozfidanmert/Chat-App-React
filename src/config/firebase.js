import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyDZScPbI0fZ1DGkMdoMoyRnRzZWI-3iiuQ",
    authDomain: "chat-app-81be2.firebaseapp.com",
    projectId: "chat-app-81be2",
    storageBucket: "chat-app-81be2.appspot.com",
    messagingSenderId: "851086828727",
    appId: "1:851086828727:web:b918d9c2f3366045435932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)



//* kullanıcı kaydı oluşturma fonksiyonu
const signup = async (username, email, password) => {
    try {
        //* kullanıcıyı email ve şifre ile kaydeder.
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        //* Yeni kullanıcı ekler
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, There i am using chat app",
            lastseen: Date.now()
        })
        toast.success("Tebrikler! Başarılı bir şekilde kayıt oldun.")

        //* Kullanıcıya ait bir sohbet koleksiyonu (chats) oluşturur
        await setDoc(doc(db, "chats", user.uid), {
            chatsData: []
        })

    } catch (error) {
        console.error(error)
        toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase())
    }
}

const login = async (email, password) => {
    try {
        //* Firebase'in email ve şifre ile giriş yapma metodudur.
        const res = await signInWithEmailAndPassword(auth, email, password)


    } catch (error) {
        console.error(error)
        toast.error("Kullanıcı adı veya şifre yanlış!")
        // toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase())
    }
}

const logout = async () => {
    try {
        //* Kullanıcı oturumunu sonlandırır.
        const user = auth.currentUser

        if (user) {
            toast.success("Çıkış yaptın! Görüşmek üzere...")
        }

        await signOut(auth)

    } catch (error) {
        console.error(error)
        toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase())
    }
}


const resetPass = async (email) => {
    if (!email) {
        toast.error("E-mail adresi boş bırakılamaz!")
        return null
    }
    try {
        const userRef = collection(db, 'users')
        const q = query(userRef, where("email", "==", email));
        const querySnap = await getDocs(q)
        if (!querySnap.empty) {
            await sendPasswordResetEmail(auth, email)
            toast.success("Şifre sıfırlama bağlantısı gönderildi!")
        } else {
            toast.error("E-posta mevcut değil!")
        }

    } catch (error) {
        console.error(error.message)
    }
}

export { signup, login, logout, auth, db, resetPass }