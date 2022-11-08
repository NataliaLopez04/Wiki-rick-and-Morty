import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import LinkItems from "./Components/ResidentInfo";
import imagenFondo from "./assets/fondo1.png";
import Loading from "./Components/Loading";
import ImageRotate from "./Components/ImageRotate";

function App() {
  const [location, setLocation] = useState({});
  const [typeId, setTypeId] = useState("");
  const [loading, setLoading] = useState(false);

  const loadingPage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios

      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
    loadingPage();
  }, []);

  console.log(location);

  const searchCharacter = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then((res) => setLocation(res.data));
  };

  return (
    <div className="containerPrimary">
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <div className="containerNavBar">
            <img className="imageNavBar" src={imagenFondo} alt="" />
          </div>
          <div className="search">
            <ImageRotate />
            <ImageRotate />
            <ImageRotate />
            <input
              type="text"
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
              placeholder="Type Number id"
            />
            <button onClick={searchCharacter}>Search</button>
            <ImageRotate />
            <ImageRotate />
            <ImageRotate />
          </div>

          <div className="containerTitle">
            <h1>Wiki Rick and Morty</h1>
            <h1>Wiki Rick and Morty</h1>
          </div>

          <div>
            <div className="containerInfo">
              <div>
                <p>
                  {" "}
                  <b>Nombre:</b>
                  {location.name}
                </p>
                <p>
                  <b>Type:</b>
                  {location.type}{" "}
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <b>Dimensión:</b>
                  {location.dimension}{" "}
                </p>
                <p>
                  <b>Cantidad de habitantes:</b>
                  {location.residents?.length}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="containerCard">
            {location.residents?.map((residents) => (
              <LinkItems url={residents} key={residents} />
            ))}
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/P9WZhGMlDBE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <footer>
            <img
              className="imageFooter"
              src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Free-Download.png"
              alt=""
            />
            <h3>Hecho con ❤️ por Natalia A. L. Orozco</h3>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
