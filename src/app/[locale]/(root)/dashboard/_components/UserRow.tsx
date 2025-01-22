// Third-Party =====> shadcn-ui
import { Button } from "@/components/ui/button";
// Icons
import { Pencil, Trash2 } from "lucide-react";
// Types
import type { TUser } from "@/types/user";

type TUserRowProps = TUser;

const UserRow = (props: TUserRowProps) => {
  return (
    <tr className="odd:border-y odd:border-y-secondary even:bg-muted">
      <td className="p-4">
        {`${props.name.firstname} ${props.name.lastname}`}
      </td>
      <td className="p-4">{props.username}</td>
      <td className="p-4">{props.phone}</td>
      <td className="p-4">{props.address.city}</td>
      <td className="p-4">
        <div className="flex-center gap-2">
          <Button variant="outline" size="icon" className="hover:bg-muted">
            <Pencil color="green" />
          </Button>
          <Button variant="outline" size="icon" className="hover:bg-muted">
            <Trash2 color="red" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
