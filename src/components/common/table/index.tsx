// React
import { Children, ReactNode } from "react";

type Props = {
  tableHeader: TTableHeader[];
  coverClassName?: string;
  tableClassName: string;
  thClassName?: string;
  noDataMsg?: string;
  isLoading?: boolean;
  children: ReactNode;
};

const Table = ({
  tableHeader,
  coverClassName = "",
  tableClassName,
  thClassName = "",
  noDataMsg = "لا يوجد بيانات",
  isLoading = false,
  children,
}: Props) => {
  // ################### CONTENT ###################
  const dataCount = Children.toArray(children).length;

  const tableHeaderContent = tableHeader.map((header) =>
    header?.isShow ? (
      <th key={header.id} className={thClassName} style={header.styling ?? {}}>
        {header.title}
      </th>
    ) : null,
  );

  let tableBodyContent;
  if (isLoading) {
    tableBodyContent = (
      <tr>
        <td colSpan={tableHeaderContent.length}>
          <span className="loading loading-spinner loading-lg bg-primary"></span>
        </td>
      </tr>
    );
  } else if (dataCount === 0) {
    tableBodyContent = (
      <tr>
        <td colSpan={tableHeaderContent.length}>{noDataMsg}</td>
      </tr>
    );
  } else {
    tableBodyContent = children;
  }

  return (
    <div className={`w-full overflow-x-auto pb-4 ${coverClassName}`}>
      <table className={`dark:text-white ${tableClassName}`}>
        <thead>
          <tr>{tableHeaderContent}</tr>
        </thead>
        <tbody>{tableBodyContent}</tbody>
      </table>
    </div>
  );
};

export default Table;
