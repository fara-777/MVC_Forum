import { useState } from "react";
import AddPostModel from "../../model";
import AddPostView from "../../views/add-post";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddPostController() {
  const navigate = useNavigate();
  //classi ornegini olusturma
  const model = new AddPostModel();
  // state'n var sayilan degerini modelden aldik
  const [form, setForm] = useState(model.state);

  // hangi inputta degisiklik varsa
  // inputun labela gore state'i gunceller
  const onInputChange = (label, value) => {
    // state'n kopyasi
    const copyState = { ...form };
    // objenin dinamik bir sekilde degerlerini degistirme
    copyState[label] = value;
    // state'i guncelle
    setForm(copyState);
  };

  // formun gonderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      alert("Lutfen butun alanlari doldurun");
    }
    axios.post("http://localhost:3000/posts", form).then(() => navigate("/"));
  };
  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
}
