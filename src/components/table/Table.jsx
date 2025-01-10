"use client";

import { useGetExpensesQuery } from "@/redux/feature/expense.api";
import moment from "moment";
import "./Table.css";

const Table = () => {
  const { data, isLoading } = useGetExpensesQuery();
  if(isLoading){
    return <p>Loading...</p>
  }
  console.log(data);
//   const datas = [
//     {
//       Groceries: "$120",
//       Transportation: "$50",
//       Healthcare: "$30",
//       Utility: "$80",
//       Charity: "$20",
//       Miscellaneous: "$10",
//     },
//     {
//       Groceries: "$150",
//       Transportation: "$40",
//       Healthcare: "$50",
//       Utility: "$70",
//       Charity: "$30",
//       Miscellaneous: "$20",
//     },
//     {
//       Groceries: "$100",
//       Transportation: "$60",
//       Healthcare: "$40",
//       Utility: "$90",
//       Charity: "$25",
//       Miscellaneous: "$15",
//     },
//   ];

  return (
    <div>
      <h1>Expense Table</h1>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Groceries</th>
            <th>Transportation</th>
            <th>Healthcare</th>
            <th>Utility</th>
            <th>Charity</th>
            <th>Miscellaneous</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td> {moment(row.date).format("YYYY-MM-DD")}</td>
              <td>{row.amount}</td>
              <td>{row.amount}</td>
              <td>{row.amount}</td>
              <td>{row.amount}</td>
              <td>{row.amount}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
