function Cards() {
  return (
    <>
      <div className="grid grid-cols-2  max-lg:grid-cols-1 gap-10">
        <div className="">
          <h1 className="font-bold my-5 ">
            <span className="text-md text-cyan-950/30">Rooms</span>
            <br />
            <span className="text-4xl">Why Us</span>
          </h1>
          <div className="grid max-lg:grid-cols-3 max-md:grid-cols-1 gap-10">
            <div>
              <h3 className="text-md font-bold border mb-2 bg-cyan-900/20 text-cyan-800 rounded-full w-fit px-4 py-2 ">
                Bedroom
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime, error dolorum? Doloribus, debitis vero eaque
                perspiciatis
              </p>
            </div>
            <div>
              <h3 className="text-md font-bold border mb-2 bg-cyan-900/20 text-cyan-800 rounded-full w-fit px-4 py-2 ">
                Bedroom
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime, error dolorum? Doloribus, debitis vero eaque
                perspiciatis
              </p>
            </div>
            <div>
              <h3 className="text-md font-bold border mb-2 bg-cyan-900/20 text-cyan-800 rounded-full w-fit px-4 py-2 ">
                Bedroom
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime, error dolorum? Doloribus, debitis vero eaque
                perspiciatis
              </p>
            </div>
          </div>
        </div>{" "}
        <img
          className="object-cover rounded-[3em] h-full"
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hotel room"
        />
      </div>
    </>
  );
}

export default Cards;
