"use strict";
function show_details(id, name, emai) {
    console.log("ID: id", "Name: ", name);
    if (emai != undefined) {
        console.log("Email: ", emai);
    }
    show_details(101, "Prasanna");
    show_details(102, "Prasanna venkatesh", "venk123@gmail.com");
}
