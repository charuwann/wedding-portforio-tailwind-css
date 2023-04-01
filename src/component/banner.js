import { useState } from "react";
import BannerHome1 from "./banner-1";

function Banner() {
  const [item, setItem] = useState(0);

  const ShowBanner = ({value}) => {
    switch (value) {
      case 0:
        return <BannerHome1 key={value} />
      case 1:
        return <BannerHome1 key={value} />
      case 2:
        return <BannerHome1 key={value} />
      default: 
        return ""
    }
  }

  return (
    <div className="relative top-0 opacity-80 flex justify-center">
      <div className="w-full btn-slide">
        <ShowBanner value={item} />
      </div>
      <div className="absolute flex justify-center lg:gap-x-3 bottom-12">
        {
          Array(3).fill().map((_, index) => (
            <button 
              key={index} 
              onClick={() => setItem(index)} 
              className={`
                w-6 h-6 
                rounded-full
                bg-white
                ${ index === item ? "opacity-100" : "opacity-30" }`}>
              </button>
          ))
        }
      </div>
    </div>
  );
}

export default Banner;