import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  // realizar peticion http

  const [Images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {Images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
