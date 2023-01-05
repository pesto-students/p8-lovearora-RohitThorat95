"use strict";

let userDetails = {
  firstname: "Optimus",
  lastname: "Prime ",
  getUser: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

let printName = function () {
  console.log(this.getUser() + "Assemble!!");
};

let logName = printName.bind(userDetails);

logName();
