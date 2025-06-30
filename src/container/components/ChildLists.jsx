function ChildLists({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <li
          key={i}
          className="text-stone-100 text-sm hover:text-purple-400 border-l-2 border-l-gray-700 hover:border-l-purple-500 p-2 hover:bg-gray-600"
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default ChildLists;
