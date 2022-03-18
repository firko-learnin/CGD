import React, { useState } from "react";
import ResultTable from "../ResultTable";
import { tableHeaders } from "../../Constants/constants";
import { TableData } from "../../Types/types";
const URL = process.env.NEXT_PUBLIC_URL;

export default function Roasters() {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [userInput, setUserInput] = useState("");
  console.log(tableData);

  // Handle change function to track user input
  function handleChange(input: string) {
    setUserInput(input);
  }

  //   Function to get all data from the database
  async function getData(e: React.FormEvent) {
    e.preventDefault();
    const req = await fetch(`${URL}/roasters?q=${userInput}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res = await req.json();
    //Extract payload from response
    //Loop through the data in the response and populate the table accordingly
    setTableData(res.payload.rows);
  }

  return (
    <div className="searchArea">
      <p>Search recipes by roaster:</p>
      <form onSubmit={(e) => getData(e)}>
        <div id="searchArea">
          <input
            onChange={(e) => handleChange(e.target.value)}
            value={userInput}
            type="text"
            id="searchBox"
          />
          <button id="searchButton" onClick={(e) => getData(e)}>
            <span className="material-icons-outlined"> search </span>
          </button>
        </div>
        {tableData.length ? (
          <ResultTable
            tableHeaders={tableHeaders}
            tableData={tableData}
            setTableData={setTableData}
          ></ResultTable>
        ) : null}
      </form>
    </div>
  );
}
