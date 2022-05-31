 import "./style.css";
 import NuKenzie from "../../imgs/NuKenzie.svg"
 import Home from '../../imgs/Home.svg'

function HeaderCard() {
  return (
    <>
      <>
        <img src={NuKenzie} alt='Símbolo NuKenzie' className="Img-NuKenzie"></img>
      </>
      <>
      <img src={Home} alt='Home' className="Img-Home"></img>
      </>
      <div className="HeaderCard"></div> 
    </>
  );
}
export default HeaderCard;
