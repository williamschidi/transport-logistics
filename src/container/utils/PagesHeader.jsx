import HrProfileAndNotification from "./HrProfileAndNotification";
// import SearchBar from "./SearchBar";
import SearchBar1 from "./SearchBar1";

function PagesHeader({ children }) {
  return (
    <header className="flex justify-between items-center py-3">
      <div className=" space-y-1">{children}</div>
      <div className="flex justify-center items-center gap-4">
        <SearchBar1 size="md" iconSize="md" />
        <HrProfileAndNotification />
      </div>
    </header>
  );
}
export default PagesHeader;
