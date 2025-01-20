const Invoice = () => {
  return (
    <div className="w-96 max-w-full rounded-md border border-secondary px-2 py-4 lg:mt-8">
      <ul className="divide-y-2 divide-secondary">
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">Subtotal:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">Discount:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">Shipping:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 text-secondary">
          <h3 className="font-bold">Estimated Tax:</h3>
          <span>$111.98</span>
        </li>
        <li className="flex-between gap-4 py-2 pt-4 text-secondary">
          <h3 className="text-xl font-bold">Total:</h3>
          <span className="text-lg font-bold">$111.98</span>
        </li>
      </ul>
    </div>
  );
};

export default Invoice;
