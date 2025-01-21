const Invoice = ({
  translations,
  subTotal,
  total,
}: {
  translations: { [key: string]: string };
  subTotal: number;
  total: number;
}) => {
  return (
    <div className="w-96 max-w-full rounded-md border border-secondary px-2 py-4 lg:mt-8">
      <ul className="divide-y-2 divide-secondary">
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.subtotal}:</h3>
          <span>${subTotal}</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.discount}:</h3>
          <span>$0</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.shipping}:</h3>
          <span>$0</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.estimatedTax}:</h3>
          <span>$12</span>
        </li>
        <li className="flex-between gap-4 py-2 pt-4 text-secondary">
          <h3 className="text-xl font-bold">{translations.total}</h3>
          <span className="text-lg font-bold">${total}</span>
        </li>
      </ul>
    </div>
  );
};

export default Invoice;
