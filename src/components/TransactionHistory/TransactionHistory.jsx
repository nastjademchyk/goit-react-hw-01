import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.th}>
        <tr className={s.table_top}>
          <th className={s.name}>Type</th>
          <th className={s.name}>Amount</th>
          <th className={s.name}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.table_lines}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tr_lines}>
            <td className={s.line}>{type}</td>
            <td className={s.line}>{amount}</td>
            <td className={s.line}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
