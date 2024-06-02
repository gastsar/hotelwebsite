import Cards from "./Cards";

function About() {
  return (
    <>
      <section className="my-[7em]">
        <div className=" flex items-center my-8 flex-row justify-center gap-8 max-md:flex-col-reverse max-md:gap-4">
          <div className="border bottom-2 p-2 w-1/2 h-full rounded-l-[160px] rounded-r-xl max-md:rounded-[10px]">
            <img
              src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" rounded-l-[150px] rounded-r-md   object-cover max-md:rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-4 w-2/3">
            <h1 className="text-4xl font-bold">
              Discover our <span className="text-amber-700">History</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis totam accusamus commodi harum adipisci rem repudiandae,
              optio soluta odit ex, fugit consectetur unde asperiores esse, quia
              animi nihil sapiente quam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quibusdam exercitationem dolore quidem sed
              tenetur, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas maiores
            </p>
          </div>
        </div>
        <Cards />
      </section>
    </>
  );
}

export default About;
