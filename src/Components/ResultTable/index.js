import React from "react";

export default function ResultTable({ tableHeaders, tableData, setTableData }) {
  const URL = process.env.REACT_APP_URL;
  async function deleteFunction(item) {
    const index = tableData.findIndex((row) => row.id === item.id);
    const response = await fetch(`${URL}/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.json();
    alert("Successfully deleted id " + item.id);
    const newTable = [
      ...tableData.slice(0, index),
      ...tableData.slice(index + 1),
    ];
    //Optimistic state update
    setTableData(newTable);
    return data;
  }
  console.log(tableData);
  return (
    <>
      <table>
        <tbody>
          <tr>
            {tableHeaders.map(function (header, index) {
              return <th key={index}>{header}</th>;
            })}
          </tr>
          {tableData.map(function (data, index) {
            return (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.roaster}</td>
                <td>{data.beantitle}</td>
                <td>{data.drink}</td>
                <td>{data.machines}</td>
                <td>{data.grinder}</td>
                <td>{data.grindsetting}</td>
                <td>{data.preinfusiontime}</td>
                <td>{data.extractiontime}</td>
                <td>{data.tastingnotes}</td>
                <td>
                  <button onClick={(e) => deleteFunction(data)}>
                    <span
                      className="material-icons-outlined"
                      style={{ color: "red" }}
                    >
                      remove_circle_outline
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
