import CardsReviews from "./CardsReviews";

function Reviews() {
  const review = [
    {
      id: 1,
      description:
        "Inventore rem veritatisobcaecati  Veniam, a quod? Quidem vitae alias harum velit laborum.",
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      id: 2,
      description:
        "Inventore rem veritatisobcaecati  Veniam, a quod? Quidem vitae alias harum velit laborum.",
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      id: 3,
      description:
        "Inventore rem veritatisobcaecati  Veniam, a quod? Quidem vitae alias harum velit laborum.",
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      id: 4,
      description:
        "Inventore rem veritatisobcaecati  Veniam, a quod? Quidem vitae alias harum velit laborum.",
      name: "John Doe",
      email: "john@doe.com",
    },
  ];
  return (
    <section className="my-[7em]">
      <div className="flex flex-col my-[7em]  m-auto text-center gap-8 w-1/2 ">
        <h1 className="text-4xl font-bold">What do our customers say?</h1>
        <p>
          Nobis voluptatem magni doloribus voluptate culpa dolor est neque odio.
          Fuga accusamus qui et omnis unde quia. Perferendis Fuga accusamus qui
          et omnis unde quia. Perferendis
        </p>
      </div>

      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
        {review.map((item) => (
          <CardsReviews key={item.id} review={item} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
