function cancelForm(row){
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("enabled");
    sessionStorage.setItem("edit","No");
    window.location = '../';
}

let id = sessionStorage.getItem("id");
let email = sessionStorage.getItem("email");
let firstName = sessionStorage.getItem("firstName");
let lastName = sessionStorage.getItem("lastName");
let enabled = sessionStorage.getItem("enabled");

if (sessionStorage.getItem("edit") == "yes") {
    document.getElementById("id").value = id;
    document.getElementById("email").value = email;
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    if (enabled == 1 )
        document.getElementById("enabled").checked = true;
}


function setAction(form) {
    if (sessionStorage.getItem("edit") == "yes") {
        console.log(sessionStorage.getItem("id"));
        console.log()
        form.method = "post";
        form.action = "/userForm/saveEdited/"+id;
        // let url = "/userForm/saveEdited/"+id;
        // let xhr = new XMLHttpRequest();
        // xhr.open("PUT", url);
        // xhr.body




        sessionStorage.removeItem("id");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("enabled");
        sessionStorage.setItem("edit","No");
        alert("Successfully Edited");
    }
    else{
        form.method = "post";
        form.action = "/userForm/save";
        alert("Successfully Saved");
    }

}