const Invoice = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  return (
    <div className="w-96 max-w-full rounded-md border border-secondary px-2 py-4 lg:mt-8">
      <ul className="divide-y-2 divide-secondary">
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.subtotal}:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.discount}:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.shipping}:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">{translations.estimatedTax}:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 pt-4 text-secondary">
          <h3 className="text-xl font-bold">{translations.total}</h3>
          <span className="text-lg font-bold">$111.98</span>
        </li>
      </ul>
    </div>
  );
};

export default Invoice;
