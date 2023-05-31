import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
    const {fotos, setFotos} = useContext(Context);

    const deleteFavorito = (id) => {
        const fotoIndex = fotos.findIndex((elem) => elem.id === id);

        fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
        setFotos([...fotos]);
    };

    return (
        <div>
            <h1 style={{color:"#43a047"}}><center>Fotos favoritas</center></h1>
            <div className="p-3 galeria grid-columns-5">
                {fotos
                .filter((elem) => elem.favorito)
                .map((elem, i) => (
                    <img
                    src={elem.src}
                    alt=""
                    onClick={() => deleteFavorito(elem.id)}
                    key={i}
                    />
                ))}
            </div>
        </div>
    )
}