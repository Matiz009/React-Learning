import React from "react";

//BEM Block Element Header
function Header() {
  return (
    <div className="header">
      <h1 className="header__title">This is a Header</h1>
      <h2 className="header__user">Matiz is signed in</h2>
    </div>
  );
}

export default Header;
