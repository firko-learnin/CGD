import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ResultTable from "../ResultTable";

export default function Management() {
  const URL = process.env.REACT_APP_URL;
  console.log(URL);

  const [tableData, setTableData] = useState([]);

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
      console.log(res.payload.rows);
      setTableData(res.payload.rows);
    };
    getData();
    return tableData;
  }, []);

  return (
    <>
      <div className="searchArea">
        <p>All data:</p>
      </div>
      <div></div>
      {/* <ResultTable></ResultTable> */}
    </>
  );
}
