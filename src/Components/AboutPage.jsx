import Images from "./Images";
import myPhoto from "../images/me.jpg";

function AboutPage() {
  const user = {
    name: "Andrii Zadorozhnii",
    imageUrl: myPhoto, // Corrected line
    imageSize: 90,
  };

  return (
    <>
      <Images src={user.imageUrl} alt={user.name} />
      <h1>About</h1>
      <p>
        Hello there. My name is {user.name}
        <br /> How do you do?
      </p>
    </>
  );
}

export default AboutPage;
