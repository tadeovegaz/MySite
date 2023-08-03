import { Fade } from "react-awesome-reveal";
import { BsGithub } from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"

const Home = () => {
  return (
    <div className="hero">
      <Fade>
        <h1>Hi. Im Tadeo Vega</h1>
      </Fade>
      <p className="descripccion">
        Deeply passionate about creating user experiences and web applications.
      </p>
      <div className="columns-2	 text-center">
        <BsGithub className="iconos"/>
        <AiFillLinkedin className="iconos"/>
      </div>
      <h2 className="recetproyects">Recent projects</h2>
    </div>
  );
};

export default Home;
