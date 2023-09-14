import { useEffect, useState } from "react";
import ModalView from "../modal-view";
import axios from "axios";

export default function ModalController({ userName, setShowModal }) {
  const [data, setData] = useState(null);
  // kullanicilari state aktar
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setData(res.data));
    console.log(data);
  }, []);
  return <ModalView data={data} setShowModal={setShowModal} />;
}
