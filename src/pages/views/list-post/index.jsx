import ModalController from "../../../components/modal-controller/index";
import { IoMdClose } from "react-icons/io";

export default function ListViews({
  data,
  showModal,
  setShowModal,
  userName,
  setUserName,
  handleDelete,
}) {
  return (
    <>
      <div className="container">
        {!data && <p className="load">Yukleniyor...</p>}
        {data?.map((posts) => (
          <div className="post" key={posts.id}>
            <div className="post-icon">
              <IoMdClose onClick={() => handleDelete(posts.id)} />
            </div>
            <div className="info">
              <h2>{posts.title}</h2>
              <p
                onClick={() => {
                  setShowModal(true), setUserName(posts.user);
                }}
              >
                {posts.user}
              </p>
            </div>
            <p className="text">{posts.text}</p>
          </div>
        ))}
        {showModal && (
          <ModalController userName={userName} setShowModal={setShowModal} />
        )}
      </div>
    </>
  );
}
