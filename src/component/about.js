import "../styles/aboutMe.css";
import portrait from "../images/portrait.jpg";

function About() {
  return (
    <div id="about" className="flex justify-center items-center py-32">
      <div className="body grid grid-cols-3 gap-24 divide-x-2 divide-black">
        <div className="w-96 h-96 py-4">
          <img className="w-auto h-full rounded-full" src={portrait} alt="about-me" />
        </div>
        <div className="col-span-2 flex items-center">
          <div className="text-left">
            <p className="about-top text-8xl mx-12">About me</p>
            <p className="text-2xl mx-12">Aliqua sint et eiusmod aute eiusmod ea minim dolore nisi fugiat aliquip duis. Velit pariatur ut ipsum ea. Reprehenderit et do minim aliquip ad reprehenderit excepteur in cupidatat. Ad nisi quis id do nulla proident duis consequat ex.</p>
            <button className="m-12 border border-black text-2xl py-2 px-6">GET TO KNOW ME BETTER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;