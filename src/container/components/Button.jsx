function Button({ children, color, bg, width = "6rem" }) {
  return (
    <button
      style={{ color, background: bg, width }}
      className={`py-1  flex justify-center items-center gap-1 text-[.7rem]   rounded-md`}
    >
      {/* <span>&#43;</span> */}
      {children}
    </button>
  );
}
export default Button;
