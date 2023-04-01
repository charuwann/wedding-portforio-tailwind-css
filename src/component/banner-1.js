import "../styles/banner.css";

import logo from '../logo.svg';
import banner from "../images/header-banner.jpg";

function BannerHome1() {
  return (
    <div className="relative w-full h-full flex justify-center banner-font">
      <img src={banner} className="top-0 w-full h-full" alt="banner-home"/>
      <div className="absolute body top-40">
        <div className="w-fit mx-auto">
          <div className="flex justify-center">
            <img src={logo} alt="logo-banner-1" />
          </div>
          <p className=" text-white banner-topic ">Siber Swans</p>
          <hr className="my-8"/>
        </div>
        <p className="banner-subtopic font-black text-white leading-none">Love Story Photography</p>
        <p className="text-2xl text-white break-word px-4 mt-12">Nisi culpa eiusmod aute sit duis minim. Ea in laboris ut elit dolor. Pariatur dolor ipsum anim pariatur labore ex nulla enim pariatur. Ea proident ipsum sit reprehenderit magna pariatur tempor sunt cillum laboris cupidatat ullamco ea. Reprehenderit est dolore cillum sunt occaecat anim pariatur labore et. Deserunt magna dolore veniam occaecat incididunt occaecat dolore dolore veniam. Fugiat sint reprehenderit mollit dolor.</p>
      </div>
    </div>
  );
}

export default BannerHome1;