import { useEffect, useState } from "react";
import axios from "axios";
import ListViews from "../../views/list-post";

/* Kullanici etkilesimi tetikleyecek fonksiyonlar
veri cekme isteleri yapilir 
View ihtiyaci olan veriler prop olarak gonderilir */
export default function ListControllers() {
  const [data, setData] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setData(res.data));
  }, []);
  // Controller Bileseninde View dondurur
  // Gerekli proplar gonderilir

  // postu silme fonksiyonu
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      const filtred = data.filter((post) => post.id !== id);
      // state'i gunceller
      setData(filtred);
    });
  };
  return (
    <ListViews
      data={data}
      showModal={showModal}
      setShowModal={setShowModal}
      userName={userName}
      setUserName={setUserName}
      handleDelete={handleDelete}
    />
  );
}
