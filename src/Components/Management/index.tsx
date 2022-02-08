import { useEffect } from "react";
import { useState } from "react";
import ResultTable from "../ResultTable";
import { TableData } from "../../Types/types";

const URL = process.env.REACT_APP_URL;
export default function Management() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const tableHeaders = [
    "Username",
    "Roaster",
    "Bean Title",
    "Drink",
    "Machine",
    "Grinder",
    "Grind Setting",
    "Pre-infusion Time (s)",
    "Extraction Time (s)",
    "Tasting Notes",
    "Delete",
  ];

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
