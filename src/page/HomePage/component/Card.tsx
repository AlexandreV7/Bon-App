import "./Card.css"
import { Link } from "react-router-dom";

import { FavoriteButton } from "./FavoriteButton";

interface CardProps {
  id: number;
  name: string;
  address: string;
  description_short: string;
  imgPath: string;
}

export const Card = ({ id, name, address, description_short, imgPath }: CardProps) => {


  return (
    <div className="card">
      <Link to={`/details/${id}`} className="image-title-container" id="link">
        <img src={imgPath} className="image-card"></img>
      </Link>
      <FavoriteButton id={id} />
      <div className="information">
        <h2 className="title-card">{name}</h2>
        <h3 className="address-card">{address}</h3>
        <p className="short-descrip-card">{description_short}</p>
      </div>
    </div>
  );
};
