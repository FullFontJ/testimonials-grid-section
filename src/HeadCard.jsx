import "./headCard.css";

export function HeadCard({ data }) {
  return (
    <>
      <div className="head-card">
        <img className="img-card" src={data.img} />
        <div className="data-user">
          <p className={data.color} >{data.user}</p>
          <p>{data.verified}</p>
        </div>
      </div>
    </>
  );
}
