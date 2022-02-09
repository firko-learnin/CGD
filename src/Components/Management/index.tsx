import { useEffect, useState } from "react";
import ResultTable from "../ResultTable";
import { TableData } from "../../Types/types";
import * as CONSTS from "../../Constants/constants";

const URL = process.env.REACT_APP_URL;
const tableHeaders = [...CONSTS.tableHeaders, "Delete"];

export default function Management() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  console.log("management render");

  //   Function to get all data from the database
  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`${URL}/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await req.json();
      //Extract payload from response
      //Loop through the data in the response and populate the table accordingly
      setTableData(res.payload.rows);
    };
    getData();
  }, []);

  return (
    <>
      <div className="searchArea">
        <p>All data:</p>
      </div>
      <div></div>
      <ResultTable
        setTableData={setTableData}
        tableHeaders={tableHeaders}
        tableData={tableData}
      ></ResultTable>
    </>
  );
}
