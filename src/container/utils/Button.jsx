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

  border = ".5px solid #1f2937",
  paddingTop = "6px",
  paddingBottom = "6px",
}) {
  return (
    <button
      style={{
        color,
        background: bg,

        border,
        paddingTop,
        paddingBottom,
      }}
      className={`lg:py-[6px] py-[5px] flex justify-center items-center lg:gap-[4px] gap-[2px] lg:text-[.7rem] text-[.6rem] rounded-md ${BTN_CLASS[btnSize]}`}
      onClick={click}
    >
      {children}
    </button>
  );
}
export default Button;
