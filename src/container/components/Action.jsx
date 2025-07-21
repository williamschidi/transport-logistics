import { Icon } from "@iconify/react/dist/iconify.js";

function Action({ handleDelete = "", handleEdit = "", handleView = "" }) {
  return (
    <div className="flex justify-start items-center gap-2 ">
      <Icon icon="mynaui:eye" width="16" height="16" onClick={handleView} />
      <Icon
        icon="lsicon:edit-outline"
        width="16"
        height="16"
        onClick={handleEdit}
      />
      <Icon icon="mynaui:trash" width="16" height="16" onClick={handleDelete} />
    </div>
  );
}
export default Action;
