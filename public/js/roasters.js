//Set url to current site
const url = window.location.origin;
//Assign table to a variable
const roastData = document.getElementById("roasterTable");
const searchArea = document.getElementById("searchArea");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleClick);
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getData();
  }
});

async function handleClick() {
  getData();
}

//Function to get all data from the database
async function getData() {
  let input = searchBox.value;
  roastData.innerHTML = "";
  const response = await fetch(`${url}/api/roasters?q=${input}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await response.json();
  //Extract payload from response
  data = data.payload;
  //Loop through the data in the response and populate the table accordingly
  updateTableData(data.rows);
}

//Function to update table with data from a GET request
async function updateTableData(data) {
  console.log(data);
  if (data.length === 0) {
    console.log("no data");
    roastData.style.textAlign = "center";
    roastData.style.color = "red";
    roastData.innerHTML = "No results found";
    roastData.style.visibility = "visible";
    return;
  }

  //Create table headers
  roastData.innerHTML =
    "<th>Username</th><th>Roaster</th><th>Bean Title</th><th>Drink</th><th>Machine</th><th>Grinder</th><th>Grind Setting</th><th>Pre-infusion Time (s)</th><th>Extraction Time (s)</th><th>Tasting Notes</th>";

  //Loop through each item in the data array (rows)
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    //Create a new row
    let newRow = document.createElement("tr");

    //Update username
    let username = document.createElement("td");
    username.innerHTML = data[i].username;
    newRow.appendChild(username);

    //Update roaster
    let roaster = document.createElement("td");
    roaster.innerHTML = data[i].roaster;
    newRow.appendChild(roaster);

    //Update bean title
    let beantitle = document.createElement("td");
    beantitle.innerHTML = data[i].beantitle;
    newRow.appendChild(beantitle);

    //Update drink name
    let drink = document.createElement("td");
    drink.innerHTML = data[i].drink;
    newRow.appendChild(drink);

    //Update machine
    let machine = document.createElement("td");
    machine.innerHTML = data[i].machines;
    newRow.appendChild(machine);

    //Update grinder
    let grinder = document.createElement("td");
    grinder.innerHTML = data[i].grinder;
    newRow.appendChild(grinder);

    //Update grind setting
    let grindsetting = document.createElement("td");
    grindsetting.innerHTML = data[i].grindsetting;
    newRow.appendChild(grindsetting);

    //Update pre-infusion time
    let preinfusiontime = document.createElement("td");
    preinfusiontime.innerHTML = data[i].preinfusiontime;
    newRow.appendChild(preinfusiontime);

    //Update extraction time
    let extractiontime = document.createElement("td");
    extractiontime.innerHTML = data[i].extractiontime;
    newRow.appendChild(extractiontime);

    //Update tasting notes
    let tastingnotes = document.createElement("td");
    tastingnotes.innerHTML = data[i].tastingnotes;
    newRow.appendChild(tastingnotes);

    //Add new row to table
    roastData.appendChild(newRow);
  }
  //Set table to visible
  roastData.style.visibility = "visible";
  roastData.style.color = "";
}
