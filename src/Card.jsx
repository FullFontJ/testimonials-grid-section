import { HeadCard } from "./HeadCard";
import "./card.css";

export function Card( {estilo, nameColor, img, user, verified, title, testimonial}) {
  const cardhead = {"color": nameColor, "img": img, "user": user, "verified": verified };

  return (
    <>
      <div className={estilo + " card"}>
        <HeadCard data={cardhead}/>

        <h3 className="card-title" >{title}</h3>
        <p className="card-testimonial">“ {testimonial} “</p>
      </div>
    </>
  );
}
