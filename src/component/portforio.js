import "../styles/portforio.css"
import background from "../images/portforio-bg.jpg";
import ButtonCustom from "../element/buttonCustom";

function Portforio() {
  return (
    <div id="portforio" className="flex justify-center bg-black h-160">
      <img className="w-full h-full opacity-60" src={background} alt="portforio-bg"/>
      <div className="body absolute my-20">
        <p className="font-dancing text-8xl text-white">Portforio</p>
        <div className="w-fit mx-auto">
          <p className="w-fit mt-16 font-josef text-9xl font-medium	text-white">
            The Best of 2020
          </p>
          <hr className="mb-16"/>
        </div>
        <p className="font-josef text-5xl font-bold">
          After wedding, Engagement, Love Story, Wedding
        </p>
        <ButtonCustom text={"MORE PHOTOS"}/>
      </div>
    </div>
  );
}

export default Portforio;