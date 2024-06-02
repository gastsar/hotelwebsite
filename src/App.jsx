import "./App.css";
import About from "./components/About";
import Baner from "./components/Baner";
import Card from "./components/Cards";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
const bedroomsMockData = [
  {
    img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Chambre Confortable 1",
    promopPrice: "20",
    bed: "1",
    bath: "1",
    layout: "50",
    price: "200",
  },
  {
    img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Chambre Confortable 2",
    promopPrice: "20",
    bed: "2",
    bath: "1",
    layout: "60",
    price: "220",
  },
  {
    img: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Chambre Confortable 3",
    promopPrice: "20",
    bed: "1",
    bath: "2",
    layout: "70",
    price: "240",
  },
];

function App() {
  return (
    <main className=" mx-[7em] max-lg:mx-10">
      <Baner />
      <Service />
      <section>
        <h1 className="text-3xl font-bold">
          Rooms we recommend <br /> for our customers
        </h1>
        <div className="grid grid-cols-3 gap-[50px] md:gap-4 max-md:grid-cols-1">
          {bedroomsMockData.map((bedroom, index) => (
            <Card key={index} bedroom={bedroom} />
          ))}
        </div>
      </section>
      <About />
      <Reviews />
    </main>
  );
}

export default App;
