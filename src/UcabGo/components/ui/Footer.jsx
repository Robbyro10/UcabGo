import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-left">© 2022 Aesthetic, Inc</div>
          <div className="col text-center">
            <h2>
              <i className="fa-solid fa-cart-shopping"></i>
            </h2>
            <h4>UCABGO</h4>
          </div>
          <div className="col text-right">
            <h2>
              <i className="fa-brands fa-github"></i>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
