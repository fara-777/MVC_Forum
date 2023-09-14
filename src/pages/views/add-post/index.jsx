export default function AddPostView({ onInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Yeni Gonderi Ekle</h2>
        <label>Kullanici Adi</label>
        <input
          onChange={(e) => {
            onInputChange("user", e.target.value);
          }}
          type="text"
          placeholder="Isim giriniz"
        />
      </fieldset>
      <fieldset>
        <label>Baslik</label>
        <input
          onChange={(e) => {
            onInputChange("title", e.target.value);
          }}
          type="text"
          placeholder="MVC"
        />
      </fieldset>
      <fieldset>
        <label>Mesajiniz</label>
        <textarea
          onChange={(e) => {
            onInputChange("text", e.target.value);
          }}
          type="text"
          maxLength={"100"}
          placeholder="Aciklamayi giriniz"
        ></textarea>
      </fieldset>
      <button>Gonder</button>
    </form>
  );
}
