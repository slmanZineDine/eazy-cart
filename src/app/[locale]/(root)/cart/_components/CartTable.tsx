import Table from "@/components/common/table";

import { useCartStore, selectCartItems } from "@/zustand/cartStore";
import CartRow from "./CartRow";
import CustomList from "@/components/common/custom-list";

const CartTable = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  // ################### ZUSTAND ###################
  const cart = useCartStore(selectCartItems);

  // ################### DATA ###################
  const tableHeader: TTableHeader[] = [
    {
      id: 1,
      title: translations.product,
      isShow: true,
      styling: { textAlign: "start", paddingBlockStart: ".5rem" },
    },
    { id: 2, title: translations.price, isShow: true },
    { id: 3, title: translations.quantity, isShow: true },
    { id: 4, title: translations.total, isShow: true },
    { id: 5, title: "", isShow: true },
  ];

  return (
    <>
      <Table
        tableHeader={tableHeader}
        thClassName="p-4"
        tableClassName="min-w-[600px] w-full text-center"
      >
        <CustomList
          records={cart}
          renderItem={(record) => <CartRow {...record} />}
        />
      </Table>
    </>
  );
};

export default CartTable;
