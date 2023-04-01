import background from "../images/portforio-bg.jpg";

function VideoHeader() {
  return (
    <div id="video" className="flex justify-center bg-black h-112">
      <img className="w-full h-full opacity-60" src={background} alt="porforio-bg"/>
      <div className="body absolute my-24">
        <p className="w-fit mx-auto font-josef text-8xl text-white font-extrabold">
          VIDEO
          <div className="py-8">
            <hr className=" border-t-2"/>
          </div>
        </p>
        <p className="font-josef text-3xl font-bold text-black px-16">
          Laborum laboris adipisicing excepteur laborum quis officia 
          dolor aliqua et Lorem fugiat. Nostrud dolore 
           Aliqua eu exercitation eu cillum mollit occaecat sunt 
           ea aliquip quis ex anim irure amet.
        </p>
      </div>
    </div>
  );
}

export default VideoHeader;