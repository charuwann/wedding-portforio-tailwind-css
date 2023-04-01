import { useState } from "react";
import Gallory from "./gallory";
function Blog() {
  const [item, setItem] = useState(0);

  const ShowGallory = ({ value }) => {
    switch (value) {
      case 0:
        return <Gallory image={"https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"}/>
      case 1:
        return <Gallory image={"https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"}/>
      case 2:
        return <Gallory image={"https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"}/>
      default:
        return ""
    }
  }
  return (
    <div id="blog">
      <ShowGallory value={item} />
      <div className="flex justify-center lg:gap-x-3 my-10">
        {
          Array(3).fill().map((_, index) => (
            <button 
              key={index} 
              onClick={() => setItem(index)} 
              className={`
                w-6 h-6 
                rounded-full 
                ${item === index ? "bg-zinc-600" : "bg-zinc-300"}`}>
              </button>
          ))
        }
      </div>
    </div>
  );
}

export default Blog;