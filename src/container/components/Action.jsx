import { Icon } from "@iconify/react/dist/iconify.js";

function Action() {
  return (
    <div className="flex justify-start items-center gap-2 ">
      <Icon icon="mynaui:eye" width="16" height="16" />
      <Icon icon="lsicon:edit-outline" width="16" height="16" />
      <Icon icon="mynaui:trash" width="16" height="16" />
    </div>
  );
}
export default Action;
