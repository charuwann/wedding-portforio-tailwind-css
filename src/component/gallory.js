function Gallory({image}) {
  return (
    <section class="overflow-hidden text-neutral-700">
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-full flex-wrap">
            <div class="w-1/3">
              <div class="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div class="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
            </div>
            <div class="w-1/3">
              <div class="w-full h-1/4 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div class="w-full h-2/4 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div class="w-full h-1/4 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
            </div>

            <div class="w-1/3">
              <div class="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={image} />
              </div>
              <div class="w-full h-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
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