import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import StarRating from "../../../utils/StarRating";

const data = [
  {
    name: "Jame Lawson",
    rating: 5,
    comment:
      "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
    date: "December 10, 2016",
  },
  {
    name: "Laura Octavian",
    rating: 4,
    comment:
      "This is really amazing product, i like the design of product, I hope can buy it again!",
    date: "December 10, 2016",
  },
  {
    name: "Jhonson Bridge",
    rating: 5,
    comment:
      "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit",
    date: "December 10, 2016",
  },
  {
    name: "William Chidi",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde, voluptas aut ratione voluptatibus vero enim ipsa, porro corporis recusandae perspiciatis eligendi. Nobis praesentium eius, dolore nulla voluptate repellat fugit",
    date: "January 15, 2016",
  },
  {
    name: "Philip Mike",
    rating: 3,
    comment:
      "Nobis praesentium eius, dolore nulla voluptate repellat fugit just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
    date: "march 7, 2016",
  },
  {
    name: "Prince Authur",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitair max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, .",
    date: "November 3rd, 2016",
  },
  {
    name: "Bola Ahmed",
    rating: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitair max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, .",
    date: "November 13, 2016",
  },
  {
    name: "Joseph Paddy",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitair max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, .",
    date: "June 3rd, 2016",
  },
  {
    name: "Frank Peters",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitair max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, .",
    date: "October 3rd, 2016",
  },
];

function Rating() {
  const [ratingMetrix, setRatingMetrix] = useState(5);

  function handleClick(x) {
    setRatingMetrix(x);
  }

  return (
    <div className="pl-3">
      <header className="flex justify-between items-center w-[60%]">
        <span className="text-xs text-yellow-200 bg-[#7152F3] w-[4rem] h-[2rem] flex justify-center items-center rounded-md border]">
          All Rating
        </span>
        <div className="flex justify-between items-center gap-4">
          <div
            className={`w-[2.8rem] h-[2.8rem] rounded-md border flex justify-center items-center hover:cursor-pointer ${
              ratingMetrix === 1 && "translate-y-[-10px] bg-[#7152F3]"
            }`}
            onClick={() => handleClick(1)}
          >
            <Icon
              icon="uim:star"
              className="w-[1.2rem] h-[1.2rem] text-yellow-400 "
            />
          </div>
          <div
            className={`w-[2.8rem] h-[2.8rem] rounded-md border flex justify-center items-center hover:cursor-pointer ${
              ratingMetrix === 2 && "translate-y-[-10px] bg-[#7152F3]"
            }`}
            onClick={() => handleClick(2)}
          >
            <Icon
              icon="uim:star"
              className="w-[1.2rem] h-[1.2rem] text-yellow-400 "
            />
          </div>
          <div
            className={`w-[2.8rem] h-[2.8rem] rounded-md border flex justify-center items-center hover:cursor-pointer ${
              ratingMetrix === 3 && "translate-y-[-10px] bg-[#7152F3]"
            }`}
            onClick={() => handleClick(3)}
          >
            <Icon
              icon="uim:star"
              className="w-[1.2rem] h-[1.2rem] text-yellow-400 "
            />
          </div>
          <div
            className={`w-[2.8rem] h-[2.8rem] rounded-md border flex justify-center items-center hover:cursor-pointer ${
              ratingMetrix === 4 && "translate-y-[-10px] bg-[#7152F3]"
            }`}
            onClick={() => handleClick(4)}
          >
            <Icon
              icon="uim:star"
              className="w-[1.2rem] h-[1.2rem] text-yellow-400 "
            />
          </div>
          <div
            className={`w-[2.8rem] h-[2.8rem] rounded-md border flex justify-center items-center hover:cursor-pointer ${
              ratingMetrix === 5 && "translate-y-[-10px] bg-[#7152F3]"
            }`}
            onClick={() => handleClick(5)}
          >
            <Icon
              icon="uim:star"
              className="w-[1.2rem] h-[1.2rem] text-yellow-400 "
            />
          </div>
        </div>
      </header>
      <div></div>
      <main className="w-[100%] h-[16rem] overflow-y-auto custom-scrollbar mt-8 pb-4">
        {data
          .filter((x) => x.rating === ratingMetrix)
          .map((d, i) => (
            <section className="space-y-4 pb-4 last:pb-0 w-[50%] " key={i}>
              <div className="flex flex-col items-center gap-1">
                <p className="font-bold text-xs">{d.name}</p>
                <StarRating rating={d.rating} />
              </div>

              <p className="text-xs">{d.comment}</p>
              <p className="text-xs">{d.date}</p>
            </section>
          ))}
      </main>
    </div>
  );
}
export default Rating;
