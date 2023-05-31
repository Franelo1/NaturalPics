import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";

export default function Galeria() {
    const { fotos, setFotos } = useContext(Context);

    const setFavorito = (id) => {
        const fotoIndex = fotos.findIndex((f) => f.id === id);
        fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
        setFotos([...fotos]);
    };

    return (
        <div className="galeria grid-columns-5 p-3">
            {fotos.map((elem, i) => (
                <div
                    className="foto"
                    style={{ backgroundImage: `url(${elem.src})` }}
                    key={i}>

                    <svg onClick={() => setFavorito(elem.id)} width="30px" viewBox="0 0 24 24" >
                        <path
                            fill={elem.favorito ? "red":"white"}
                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                        </path>
                    </svg>

                    <p>{elem.desc}</p>
                </div>
            ))}
        </div>
    )
}