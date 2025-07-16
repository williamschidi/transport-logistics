function Earning() {
  return (
    <section className="space-y-3 px-4">
      <header className="flex justify-between items-center py-2 text-xs font-bold">
        <span>Total Accrued</span>
        <span>#30,000.00</span>
      </header>
      <main className="space-y-2">
        <div className="flex justify-between items-center py-2 text-xs border-b border-gray-400 pb-3">
          <span>Earning Percentage</span>
          <span>80%</span>
        </div>
        <div className="flex justify-between items-center py-2 text-xs border-b border-gray-400 pb-3">
          <span>Position</span>
          <span>Starter</span>
        </div>
        <div className="flex justify-between items-center py-2 text-xs border-b border-gray-400 pb-3">
          <span>Payment method</span>
          <span>Wallet Withdrawal</span>
        </div>
      </main>
    </section>
  );
}
export default Earning;
