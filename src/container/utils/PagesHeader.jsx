import HrProfileAndNotification from "./HrProfileAndNotification";
import SearchBar from "./SearchBar";

function PagesHeader({ children }) {
  return (
    <header className="flex justify-between items-center py-4 ">
      <div className=" space-y-1">{children}</div>
      <div className="flex justify-center items-center gap-4">
        <SearchBar inputWidth="13rem" py="8px" pl="32px" />
        <HrProfileAndNotification />
      </div>
    </header>
  );
}
export default PagesHeader;
