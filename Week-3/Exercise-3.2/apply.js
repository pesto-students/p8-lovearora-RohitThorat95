let userDetails = {
  firstname: "Rohit",
  lastname: "Thorat ",
  getUser: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

let printName = function (snack, hobby) {
  console.log(this.getUser() + " loves " + snack + " and " + hobby);
};

printName.apply(userDetails, ["sushi", "algorithms"]); // Pika Chu  loves sushi and algorithms
