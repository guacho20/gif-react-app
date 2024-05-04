import { useGifs } from "../hooks";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  // realizar peticion http

  const { images, isLoading } = useGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
