import { Icon } from "@iconify/react/dist/iconify.js";

function StarRating({ rating }) {
  return (
    <div className="flex justify-between items-center w-[6rem]">
      {Array.from({ length: rating }, (_, i) => (
        <Icon
          key={`filled-${i}`}
          icon="uim:star"
          className="w-[1.2rem] h-[1.2rem] text-yellow-400"
        />
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <Icon
          key={`empty-${i}`}
          icon="uim:star"
          className="w-[1.2rem] h-[1.2rem]"
        />
      ))}
    </div>
  );
}
export default StarRating;
