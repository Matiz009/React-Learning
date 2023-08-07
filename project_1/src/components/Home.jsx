import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> TechStar </h1> <p> Solutions to your digital problems </p>{" "}
        </main>{" "}
      </div>{" "}
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            {" "}
            ' Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño.El punto de usar Lorem Ipsum es que tiene una distribución
            más o menos normal de las letras, al contrario de usar textos como
            por ejemplo "Contenido aquí, contenido aquí".Estos textos hacen
            parecerlo un español que se puede leer.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="home3" id="about">
        <div>
          <h1> Who we are ? </h1>{" "}
          <p>
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="home4" id="brands">
        <div>
          <h1> Brands </h1>{" "}
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p> Google </p>{" "}
            </div>{" "}
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p> Amazon </p>{" "}
            </div>{" "}
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p> Youtube </p>{" "}
            </div>{" "}
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillTwitterCircle />
              <p> Twitter </p>{" "}
            </div>{" "}
          </article>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Home;
