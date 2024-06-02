import { Bath, Bed, Layout } from "lucide-react";
import Image from "./Image";

export default function Card({ bedroom }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl shadow-xl p-3 ">
      <Image bedroom={bedroom} />
      <h1 className="text-md font-semibold">{bedroom.title}</h1>
      <p className="flex flex-row gap-4  text-sm font-semibold text-slate-500">
        <span className="flex flex-row gap-2 items-center">
          <Bed className="w-4 h-4" />
          {bedroom.bed}
        </span>
        <span className="flex flex-row gap-2 items-center">
          <Bath className="w-4 h-4" />
          {bedroom.bath}
        </span>
        <span className="flex flex-row gap-2 items-center">
          <Layout className="w-4 h-4" />
          {bedroom.layout}
        </span>
      </p>
      <p className="text-slate-500 text-sm ">
        <span className="font-bold"> ${bedroom.price}</span>{" "}
        <span className="text-slate-500/60">/day</span>
      </p>
    </div>
  );
}
