//Set url to current site
const url = window.location.origin;
//Assign table to a variable
const grindData = document.getElementById("grinderTable");
const searchArea = document.getElementById("searchArea");

async function handleClick() {
  getData();
}

//Function to get all data from the database
async function getData() {
  grindData.innerHTML = "";
  const response = await fetch(`${url}/api/`, {
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
    grindData.style.textAlign = "center";
    grindData.style.color = "red";
    grindData.innerHTML = "No results found";
    grindData.style.visibility = "visible";
    return;
  }

  //Create table headers
  grindData.innerHTML =
    "<th>Username</th><th>Roaster</th><th>Bean Title</th><th>Drink</th><th>Machine</th><th>Grinder</th><th>Grind Setting</th><th>Pre-infusion Time (s)</th><th>Extraction Time (s)</th><th>Tasting Notes</th><th>Delete</th>";

  //Loop through each item in the data array (rows)
  for (let i = 0; i < data.length; i++) {
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

    //Add delete button
    let deleteButton = document.createElement("td");
    deleteButton.innerHTML =
      "<span class='material-icons-outlined' style='color:red'>remove_circle_outline</span>";
    deleteButton.value = data[i].id;
    deleteButton.addEventListener("click", async function deleteFunction() {
      let idno = deleteButton.value;
      console.log(idno);
      const response = await fetch(`${url}/api/${idno}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      alert("Successfully deleted id " + idno);
      location.reload();
    });
    newRow.appendChild(deleteButton);

    //Add new row to table
    grindData.appendChild(newRow);
  }
  //Set table to visible
  grindData.style.visibility = "visible";
  grindData.style.color = "";
}

async function deleteRow(id) {
  console.log(id);
}

getData();
