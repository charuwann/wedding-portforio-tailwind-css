import BottonCustom from "../element/buttonCustom";
const images = [
  "https://phuketprivatevillas.impiana.com.my/wp-content/uploads/sites/192/2018/03/19-640x380.jpg",
  "https://www.itourvn.com/images/easyblog_images/2019/june/wedding_photo_shoots/beautiful-places-in-vietnam-for-wedding-photoshoots-nha-trang-3.png",
  "https://www.itourvn.com/images/easyblog_images/2019/june/wedding_photo_shoots/beautiful-places-in-vietnam-for-wedding-photoshoots-nha-trang-2.jpg"
]

function VideoContent() {
  return (
    <div className="flex justify-center mt-10">
      <div className="body">
        <div className="px-12">
          <img src="https://apis.xogrp.com/media-api/images/14fe20bd-e6f9-4ce8-b0ba-50764e70b835" alt="wedding-img" />
        </div>
        <div className="py-4">
          <hr className="mx-auto border-t-2 border-black w-6"/>
        </div>
        <p className="text-2xl px-8 break-words -mt-1">Pariatur est ipsum eu non laborum nulla exercitation eiusmod culpa laborum aliquip. Ad ipsum duis exercitation consectetur in in eu quis est magna minim voluptate et. Duis labore magna commodo eu magna ut deserunt eu. Reprehenderit labore ut consectetur irure reprehenderit elit esse nisi. Sit aute ea veniam laborum reprehenderit.</p>
        <div className="grid grid-cols-3 gap-4 my-10">
          {
            images.map((item, index) => (
              <div key={index} className="w-full h-full">
                <div className="h-48">
                  <img className="h-full w-full" src={item} alt={`img-${index}`} />
                </div>
                <div className="py-4">
                  <hr className="mx-auto border-t-2 border-black w-6"/>
                </div>
                <p className="text-2xl px-8 break-words -mt-1">Pariatur est ipsum eu non laborum nulla exercitation eiusmod culpa laborum aliquip.</p>
              </div>
            ))
          }
        </div>
        <BottonCustom text={"MORE VIDEOS"}/>
      </div>
    </div>
  );
}

export default VideoContent;