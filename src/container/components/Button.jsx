function Button({ click, children, color, bg, width = "6rem" }) {
  return (
    <button
      style={{ color, background: bg, width }}
      className={`py-1  flex justify-center items-center gap-1 text-[.7rem]   rounded-md`}
      onClick={click}
    >
      {/* <span>&#43;</span> */}
      {children}
    </button>
  );
}
export default Button;
