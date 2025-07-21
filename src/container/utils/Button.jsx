function Button({
  click,
  children,
  color,
  bg,
  width = "6rem",
  border = ".5px solid #1f2937",
  paddingTop = "6px",
  paddingBottom = "6px",
}) {
  return (
    <button
      style={{
        color,
        background: bg,
        width,
        border,
        paddingTop,
        paddingBottom,
      }}
      className={`py-[6px] flex justify-center items-center gap-[4px] text-[.7rem]  rounded-md`}
      onClick={click}
    >
      {children}
    </button>
  );
}
export default Button;
