import { IoMdClose } from "react-icons/io";

export default function ModalView({ setShowModal, data }) {
  return (
    <>
      <div className="wrapper">
        <div className="modal">
          <div className="modal-icon">
            <IoMdClose onClick={() => setShowModal(false)} />
          </div>
          {!data && <p>Yukleniyor...</p>}
          <h2>
            <span>{data && data[0].user}</span> kullanicisinin gonderileri
          </h2>
          {data?.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <h4>{post.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
