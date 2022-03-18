import { TableData } from "../../Types/types";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

type ResultTableProps = {
  tableHeaders: string[];
  tableData: TableData[];
  setTableData: (newData: TableData[]) => void;
};

export default function ResultTable({
  tableHeaders,
  tableData,
  setTableData,
}: ResultTableProps) {
  console.log(tableHeaders);
  const URL = process.env.NEXT_PUBLIC_URL;
  async function deleteFunction(item: TableData) {
    const response = await fetch(`${URL}/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    alert("Successfully deleted id " + item.id);
    const newTable = tableData.filter((tableRow) => tableRow.id !== item.id);
    //Optimistic state update
    setTableData(newTable);
  }
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
                {tableHeaders.includes("Delete") ? (
                  <td>
                    <button onClick={(e) => deleteFunction(data)}>
                      <RemoveCircleOutlineOutlinedIcon
                        style={{ fill: "red" }}
                      ></RemoveCircleOutlineOutlinedIcon>
                    </button>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
