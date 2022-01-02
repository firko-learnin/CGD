//Set url to current site
const url = "";
//Assign table to a variable
const grindData = document.getElementById("grinderTable");
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
  grindData.innerHTML = "";
  const response = await fetch(`${url}/api/grinders?q=${input}`, {
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
  if (data.length === 0) {
    console.log("no data");
    grindData.style.textAlign = "center";
    grindData.style.color = "red";
    grindData.innerHTML = "No results found";
    grindData.style.visibility = "visible";
    return;
  }
  //Set table to visisble
  grindData.style.visibility = "visible";
  grindData.style.color = "";

  //Create table headers
  grindData.innerHTML =
    "<th>Username</th><th>Drink</th><th>Grinder</th><th>Grind Setting</th><th>Pre-infusion Time (s)</th><th>Extraction Time (s)</th><th>Tasting Notes</th><th>Roaster</th><th>Bean Title</th>";

  //Loop through each item in the data array (rows)
  for (let i = 0; i < data.length; i++) {
    //Update username
    let username = document.createElement("td");
    username.innerHTML = data[i].username;
    grindData.appendChild(username);
    //Update drink name
    let drink = document.createElement("td");
    drink.innerHTML = data[i].drink;
    grindData.appendChild(drink);
    //Update grinder
    let grinder = document.createElement("td");
    grinder.innerHTML = data[i].grinder;
    grindData.appendChild(grinder);
    //Update grind setting
    let grindsetting = document.createElement("td");
    grindsetting.innerHTML = data[i].grindsetting;
    grindData.appendChild(grindsetting);
    //Update pre-infusion time
    let preinfusiontime = document.createElement("td");
    preinfusiontime.innerHTML = data[i].preinfusiontime;
    grindData.appendChild(preinfusiontime);
    //Update extraction time
    let extractiontime = document.createElement("td");
    extractiontime.innerHTML = data[i].extractiontime;
    grindData.appendChild(extractiontime);
    //Update tasting notes
    let tastingnotes = document.createElement("td");
    tastingnotes.innerHTML = data[i].tastingnotes;
    grindData.appendChild(tastingnotes);
    //Update roaster
    let roaster = document.createElement("td");
    roaster.innerHTML = data[i].roaster;
    grindData.appendChild(roaster);
    //Update bean title
    let beantitle = document.createElement("td");
    beantitle.innerHTML = data[i].beantitle;
    grindData.appendChild(beantitle);
    //Update machine
    let machine = document.createElement("td");
    machine.innerHTML = data[i].machine;
  }
}
