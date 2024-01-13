// Bài 1
var users = [
    { id: 1, name: "James Smith", gender: 2 },
    { id: 2, name: "Isla Brown", gender: 1 },
    { id: 3, name: "Amelia Davies", gender: 2 },
    { id: 4, name: "Jacob Evans", gender: 1 },
  ];
  var target = document.querySelector("#target");
  for (const user of users) {
    if (user.gender == 1) {
      user.gender = "male";
    }else{
      user.gender = "female";
    }
    const liElement = document.createElement("li");
    liElement.classList.add("user_item");
    liElement.textContent = user.id + " - " + user.name + " - " + user.gender;
    target.appendChild(liElement);
  }