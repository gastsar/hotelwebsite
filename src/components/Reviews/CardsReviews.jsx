import { Quote } from "lucide-react";

function CardsReviews({ review }) {
  return (
    <div className="flex flex-col items-center shadow-md rounded-md p-4 gap-4 text-center">
      <span className="text-4xl text-amber-900  rounded-full p-2">
        <Quote className="" />
      </span>
      <p className="text-md text-gray-500">{review.description}</p>
      <p className="text-md font-bold">{review.name}</p>
      <p className="text-md text-gray-500">{review.email}</p>
    </div>
  );
}

export default CardsReviews;
