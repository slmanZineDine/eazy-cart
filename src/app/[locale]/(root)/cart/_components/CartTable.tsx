import Table from "@/components/common/table";
import TableRowList from "@/components/common/custom-list/CustomList";
import { useCartStore, selectCartItems } from "@/zustand/cartStore";
import CartRow from "./CartRow";

const CartTable = () => {
  // ################### ZUSTAND ###################
  const cart = useCartStore(selectCartItems);

  // ################### DATA ###################
  const tableHeader: TTableHeader[] = [
    {
      id: 1,
      title: "Product",
      isShow: true,
      styling: { textAlign: "start", paddingBlockStart: ".5rem" },
    },
    { id: 2, title: "Price", isShow: true },
    { id: 3, title: "Quantity", isShow: true },
    { id: 4, title: "Total", isShow: true },
    { id: 5, title: "", isShow: true },
  ];

  return (
    <>
      <Table
        tableHeader={tableHeader}
        thClassName="p-4"
        tableClassName="min-w-[600px] w-full text-center"
        coverClassName=""
      >
        <TableRowList
          records={cart}
          renderItem={(record) => <CartRow {...record} />}
        />
      </Table>
    </>
  );
};

export default CartTable;
