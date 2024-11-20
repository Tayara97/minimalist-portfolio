const Card = ({ img, link, children, discription }) => {
  return (
    <a href={link} className="card" target="_blank">
      <div className="logo">
        <img src={img} alt={children} />
      </div>
      <h2>{children}</h2>
      <p>{discription}</p>
    </a>
  );
};

export default Card;
