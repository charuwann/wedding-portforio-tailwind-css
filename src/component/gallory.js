function Gallory({image}) {
  return (
    <section className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full flex-wrap">
            <div className="w-1/3">
              <div className="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div className="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="w-full h-1/4 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div className="w-full h-2/4 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div className="w-full h-1/4 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
            </div>

            <div className="w-1/3">
              <div className="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div className="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallory;