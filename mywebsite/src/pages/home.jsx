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
          <div className="mx-auto photo">
            <img src="https://scontent.fgdl9-1.fna.fbcdn.net/v/t31.18172-8/14258163_1165278266867027_2920365730673968991_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xOmOu2nROmQAX_l8vaC&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfAIyeUFVx1jQhUATMSP2aapsHOpPKRa4qvEg_g4ifQRFw&oe=64FEA88C" alt="" />
          </div>
          <div>
          <h2 className="mainparrafo">I am a passionate programmer with a deep love for designing innovative software ideas.</h2>
          <p className="parrafo">Hola como estas jajaj</p>
          </div>
          <h1>hola</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
