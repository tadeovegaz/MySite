import { Fade } from "react-awesome-reveal";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai"
import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Fade delay={500}>
          <h1>Hi. I'm Tadeo Vega</h1>
        </Fade>
      </div>
      <div class="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="mx-auto">
            <h1>Foto</h1>
          </div>
          <div>
            <h2 className="">I'm a Product Designer working remotely from 14°C Dublin, Ireland.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
