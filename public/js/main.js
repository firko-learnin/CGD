//Set url to current site
const url = "";
//Assign table to a variable
const allApiData = document.getElementById("allApiData");

//Function to get all data from the database
async function getData() {
  const response = await fetch(`${url}/api`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await response.json();
  //Extract payload from response
  data = data.payload;
  //Loop through the data in the response and populate the table accordingly
  updateTableData(data.rows);
}
//Call function on page load
getData();

//Function to update table with data from a GET request
async function updateTableData(data) {
  //Loop through each item in the data array (rows)
  for (let i = 0; i < data.length; i++) {
    //Update username
    let username = document.createElement("td");
    username.innerHTML = data[i].username;
    allApiData.appendChild(username);
    //Update drink name
    let drink = document.createElement("td");
    drink.innerHTML = data[i].drink;
    allApiData.appendChild(drink);
    //Update grinder
    let grinder = document.createElement("td");
    grinder.innerHTML = data[i].grinder;
    allApiData.appendChild(grinder);
    //Update grind setting
    let grindsetting = document.createElement("td");
    grindsetting.innerHTML = data[i].grindsetting;
    allApiData.appendChild(grindsetting);
    //Update pre-infusion time
    let preinfusiontime = document.createElement("td");
    preinfusiontime.innerHTML = data[i].preinfusiontime;
    allApiData.appendChild(preinfusiontime);
    //Update extraction time
    let extractiontime = document.createElement("td");
    extractiontime.innerHTML = data[i].extractiontime;
    allApiData.appendChild(extractiontime);
    //Update tasting notes
    let tastingnotes = document.createElement("td");
    tastingnotes.innerHTML = data[i].tastingnotes;
    allApiData.appendChild(tastingnotes);
    //Update roaster
    let roaster = document.createElement("td");
    roaster.innerHTML = data[i].roaster;
    allApiData.appendChild(roaster);
    //Update bean title
    let beantitle = document.createElement("td");
    beantitle.innerHTML = data[i].beantitle;
    allApiData.appendChild(beantitle);
    //Update machine
    let machine = document.createElement("td");
    machine.innerHTML = data[i].machine;
  }
}
