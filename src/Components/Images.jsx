import "../styles/images.css";

function Images(props) {
  return (
    <>
      <img className="avatar" src={props.src} alt={props.alt} />
    </>
  );
}

export default Images;
