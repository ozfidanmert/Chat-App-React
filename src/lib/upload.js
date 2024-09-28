import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import Resizer from 'react-image-file-resizer';  // Resizer'ı import et

const upload = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${Date.now() + '_' + file.name}`);

    // Resmi boyutlandırma işlemi
    const resizedImage = await new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            1024, // Yeni genişlik (istediğiniz değeri verebilirsiniz)
            1024, // Yeni yükseklik
            'JPEG', // Çıktı formatı (JPEG, PNG gibi)
            70, // Kalite (0-100 arası)
            0, // Dönüş açısı
            (uri) => {
                resolve(uri);
            },
            'blob' // Çıktı formatı: Blob, Base64
        );
    });

    try {
        // Boyutlandırılmış resmi Firebase'e yükleme işlemini başlat
        const snapshot = await uploadBytes(storageRef, resizedImage);

        // Yükleme tamamlandığında download URL'yi al
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Yükleme başarıyla tamamlandığında URL'yi döndür
        return downloadURL;

    } catch (error) {
        // Hata durumunda bildirim göster
        toast.error("İşlem başarısız!");
        throw error;
    }
};

export default upload;
