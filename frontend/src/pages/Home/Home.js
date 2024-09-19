import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon.png"
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <img src={logo} alt="img" className="logo-img" size={12} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Regjistrohu</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Hyr</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventari i gjimnazit "Muhamer Janina"</h2>
          <p>
            Sistemi i inventarit në kohë reale për gjimnazin Muhamer Janina
            integron teknologji për menaxhimin e produkteve në depo. Ndërfaqja e
            përdoruesit është e përshtatshme dhe ofron akses të ndryshueshëm për
            personelin. Ky sistem përmirëson efikasitetin dhe monitoron stokun
            në mënyrë efektive, duke ndihmuar në zhvillimin e shkollës.
          </p>
         
        
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};



export default Home;
