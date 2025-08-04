const BTN_CLASS = {
  lg: "lg:w-[9rem] md:w-[8rem] w-[7rem]",
  md: "lg:w-[7rem] md:w-[6rem] w-[5rem]",
  sm: "lg:w-[6rem] w-[5rem]",
};

function Button({
  btnSize = "sm",
  click,
  children,
  color,
  bg,
  shadow = "",
  border = ".5px solid #1f2937",
  paddingTop = "6px",
  paddingBottom = "6px",
}) {
  const bgClass =
    bg === "linear" ? "linear-gradient(to right,#1F2937, #111827)" : bg;

  console.log(shadow);
  return (
    <button
      style={{
        color,
        background: bgClass,
        boxShadow: shadow,
        border,
        paddingTop,
        paddingBottom,
      }}
      className={`lg:py-[6px] py-[5px] flex justify-center items-center lg:gap-[6px] gap-[2px] lg:text-[.7rem] text-[.6rem] rounded-md ${BTN_CLASS[btnSize]}`}
      onClick={click}
    >
      {children}
    </button>
  );
}
export default Button;
