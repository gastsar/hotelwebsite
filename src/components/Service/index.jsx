import {
  Bath,
  Coffee,
  CupSoda,
  ParkingSquare,
  PlugZap,
  WifiIcon,
} from "lucide-react";

function Service() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Over Service</h1>
      <div>
        <ul className=" grid grid-cols-3 gap-8 ">
          <li className="flex flex-col items-center gap-2">
            <WifiIcon className="text-amber-700/50" /> Free Wifi
          </li>
          <li className="flex flex-col items-center gap-2">
            <Coffee className="text-amber-700/50" /> Breakfast
          </li>
          <li className="flex flex-col items-center gap-2">
            <PlugZap className="text-amber-700/50" /> Free Electricity
          </li>
          <li className="flex flex-col items-center gap-2">
            <ParkingSquare className="text-amber-700/50" /> Parking Area
          </li>
          <li className="flex flex-col items-center gap-2">
            <Bath className="text-amber-700/50" /> Swimming Pool
          </li>
          <li className="flex flex-col items-center gap-2">
            <CupSoda className="text-amber-700/50" /> Excercise Space
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Service;
