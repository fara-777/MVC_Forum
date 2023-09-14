import { NavLink } from "react-router-dom";

export default function HeaderView() {
  return (
    <>
      <header>
        <h1>MVC Forum</h1>
        <NavLink to={"/"}>Gonderiler</NavLink>
        <NavLink to={"add-post"}>Gonderi Ekle</NavLink>
      </header>
    </>
  );
}
