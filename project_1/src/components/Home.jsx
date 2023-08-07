import React from "react";
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
      <div className="home">
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
    </>
  );
};

export default Home;
