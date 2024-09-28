import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db, logout } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    const navigate = useNavigate()
    const [userData, setUserData] = useState(null)
    const [chatData, setChatData] = useState(null)
    const [messagesId, setMessagesId] = useState(null)
    const [messages, setMessages] = useState([])
    const [chatUser, setChatUser] = useState(null)

    const [loading, setLoading] = useState(true)
    const [chatLoading, setChatLoading] = useState(true)
    const [isOnline, setIsOnline] = useState(false)
    const [chatVisible, setChatVisible] = useState(false)


    //* giriş yapan kullanıcının datalarını getirir
    const loadUserData = async (uid) => {
        try {

            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();
            setUserData(userData);

            if (userData.name) {
                navigate("/chat");
            } else {
                navigate("/profile");
            }

            await updateDoc(userRef, {
                lastseen: Date.now(),
            });

            //* Her bir dakikada last seen günceller
            setInterval(async () => {
                if (auth.currentUser) {
                    await updateDoc(userRef, {
                        lastseen: Date.now(),
                    });
                }

            }, 60000);

        } catch (error) {
            console.error(error);
        }
    };

    //* Çıkış yapma fonksiyonu
    const logouts = async () => {
        await logout()
        setChatUser(null)
        setUserData(null)
        setChatData(null)
    }


    const onlineControl = async (userId) => {

        const userRef = doc(db, 'users', userId)
        const userSnap = await getDoc(userRef)
        const lastSeen = userSnap.data()?.lastseen;

        if (Date.now() - lastSeen <= 70000) {
            setIsOnline(true)
        } else {
            setIsOnline(false)
        }
    }

    useEffect(() => {
        if (chatUser) {
            onlineControl(chatUser.rId);

            const interval = setInterval(() => {
                onlineControl(chatUser.rId);
            }, 20000);

            return () => clearInterval(interval)
        }



    }, [chatUser]);


    const inputClickControl = async () => {

        //* mesaj okundu bilgisini true yap (messageSeen)
        const userChatsRef = doc(db, 'chats', userData.id)
        const userChatSnapshot = await getDoc(userChatsRef)
        const userChatsData = userChatSnapshot.data()
        const chatIndex = userChatsData.chatsData.findIndex(c => c.messageId === chatUser.messageId)
        if (userChatsData.chatsData[chatIndex].messageSeen == false) {
            userChatsData.chatsData[chatIndex].messageSeen = true

            await updateDoc(userChatsRef, {
                chatsData: userChatsData.chatsData
            })
        }

    }


    const messageSeen = async (item) => {
        //* mesaj okundu bilgisini true yap (messageSeen)
        const userChatsRef = doc(db, 'chats', userData.id)
        const userChatSnapshot = await getDoc(userChatsRef)
        const userChatsData = userChatSnapshot.data()
        const chatIndex = userChatsData.chatsData.findIndex(c => c.messageId === item.messageId)

        if (userChatsData.chatsData[chatIndex].messageSeen == false) {
            userChatsData.chatsData[chatIndex].messageSeen = true

            await updateDoc(userChatsRef, {
                chatsData: userChatsData.chatsData
            })
        }
    }



    // console.log("chatData:", chatData + " userData:", userData)

    useEffect(() => {
        if (userData) {
            setChatLoading(true);
            try {
                const chatRef = doc(db, "chats", userData.id);

                //* anlık güncelleme alınır
                const unsub = onSnapshot(chatRef, async (res) => {
                    const chatItems = res.data().chatsData;

                    //* Kullanıcıları tek seferde toplu olarak önbelleğe eklemek ve sorguları hızlandırmak için;
                    const userRefs = chatItems.map((item) => doc(db, "users", item.rId));
                    const userSnaps =
                        await Promise.all(userRefs.map((userRef) => getDoc(userRef)));

                    const tempData = userSnaps.map((snap, index) => (
                        { ...chatItems[index], userData: snap.data() }
                    ));

                    //* chat düzenlenme zamanındaki önceliğini ayarladık
                    setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
                    setChatLoading(false);
                });

                return () => {
                    if (unsub) {
                        unsub();
                    }
                };
            } catch (error) {
                console.error(error.message);
            }
        }
    }, [userData]);



    const value = {
        userData, setUserData,
        chatData, setChatData,
        loadUserData,
        loading, setLoading,
        messagesId, setMessagesId,
        messages, setMessages,
        chatUser, setChatUser,
        chatLoading, setChatLoading,
        onlineControl, isOnline,
        inputClickControl,
        logouts,
        messageSeen,
        chatVisible, setChatVisible
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider