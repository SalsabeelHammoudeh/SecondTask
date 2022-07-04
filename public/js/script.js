async function loadIntoTable(url,table){
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const rows= await  response.json();
    console.log(rows);
    tableBody.innerHTML = "";

    for (const row of Object.values(rows)){
        const rowElement = document.createElement("tr");
        for (const cellText of Object.values(row)){
            const cellElement = document.createElement("td");
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }
        const cellElement = document.createElement("td");//onclick="edit(this)"
        let html = '<button type="button" class="btn btn-success edit" id="edit" onclick="edit(this)" >Edit</button>' +
            '<button type="button" class="btn btn-danger delete" onclick="deleteUser(this)" >Delete </button>';
        cellElement.innerHTML = html;
        rowElement.appendChild(cellElement);
        tableBody.appendChild(rowElement);
    }

}
loadIntoTable("http://localhost:3000/allUsers",document.querySelector("table"))

function edit(row){
    let id = row.parentElement.parentElement.cells[0].innerText;
    let email = row.parentElement.parentElement.cells[1].innerText;
    let firstName = row.parentElement.parentElement.cells[2].innerText;
    let lastName = row.parentElement.parentElement.cells[3].innerText;
    let password = row.parentElement.parentElement.cells[4].innerText;
    let enabled = row.parentElement.parentElement.cells[5].innerText;
    sessionStorage.setItem("edit", "yes");
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("enabled", enabled);
    window.location = '/userForm';
}



function deleteUser(row){
    let userID = row.parentElement.parentElement.cells[0].innerText;
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:3000/deleteUser/"+userID);
    xhr.send();
    loadIntoTable("http://localhost:3000/allUsers",document.querySelector("table"))
    console.log("Deleted "+userID);
}
