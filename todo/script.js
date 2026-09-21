// Get elements

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const saveUser = document.getElementById("saveUser");
const todoList = document.getElementById("todoList");


// Get users from LocalStorage

let users = JSON.parse(localStorage.getItem("users")) || [];


// --------------------------------
// Save User
// --------------------------------

saveUser.addEventListener("click", function () {

  const name = nameInput.value;
  const age = ageInput.value;


  // Check input

  if (name === "" || age === "") {

    alert("Please enter name and age");

    return;
  }


  // Create user

  const user = {
    id: Date.now(),
    name: name,
    age: age
  };


  // Add new user to array

  users.push(user);


  // Save updated array

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );


  // Display users

  showUsers();


  // Clear inputs

  nameInput.value = "";
  ageInput.value = "";

});



// --------------------------------
// Show All Users
// --------------------------------

function showUsers() {

  // Clear table first

  todoList.innerHTML = "";


  // Loop through all users

  users.forEach(function (user) {

    // Create row

    const row = document.createElement("tr");


    // Name

    const nameCell = document.createElement("td");

    nameCell.textContent = user.name;


    // Age

    const ageCell = document.createElement("td");

    ageCell.textContent = user.age;


    // Action

    const actionCell = document.createElement("td");


    // Delete button

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete");


    // Delete user

    deleteButton.addEventListener("click", function () {

      users = users.filter(function (item) {

        return item.id !== user.id;

      });


      // Update LocalStorage

      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );


      // Refresh table

      showUsers();

    });


    // Add button to action cell

    actionCell.appendChild(deleteButton);


    // Add cells to row

    row.appendChild(nameCell);

    row.appendChild(ageCell);

    row.appendChild(actionCell);


    // Add row to table

    todoList.appendChild(row);

  });

}



// --------------------------------
// Show users when page loads
// --------------------------------

showUsers();