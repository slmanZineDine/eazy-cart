// React
import { Fragment } from "react";

type TCustomListProps<TRecord> = {
  records: TRecord[];
  renderItem: (record: TRecord, index: number) => React.ReactNode;
};
type THasId = { id?: number; service_id?: number };

const CustomList = <T extends THasId>({
  records,
  renderItem,
}: TCustomListProps<T>) => {
  // ################### CONTENT ###################
  let content;
  if (records.length > 0) {
    content = records.map((record, index) => (
      <Fragment key={record?.id ?? index}>{renderItem(record, index)}</Fragment>
    ));
  } else {
    content = <></>;
  }

  return content;
};

export default CustomList;
