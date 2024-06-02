import { Search } from "lucide-react";

function Baner() {
  return (
    <div className="">
      <img
        className="w-full h-[50vh] object-cover rounded-lg "
        src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <ul className="flex mx-auto -translate-y-6 items-center w-[50%]  text-amber-700 font-semibold justify-around  gap-5 bg-white p-3 rounded-lg shadow-lg">
        <li className="">
          <select name="date" id="">
            <option value="">Date</option>
          </select>
        </li>
        <li className="">
          <select name="guest" id="">
            <option value="">Guest</option>
          </select>
        </li>
        <li className="">
          <select name="room" id="">
            <option value="">Room</option>
          </select>
        </li>
        <li className=" ">
          <label className="relative" htmlFor="search">
            <Search className="absolute h-[18px] left-2 top-1/2 -translate-y-1/2" />
            <input
              className="w-[120px] h-[40px] p-3 pl-10 rounded-lg  bg-amber-700/10 text-amber-700"
              type="search"
              name=""
              placeholder="Search"
              id=""
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Baner;
