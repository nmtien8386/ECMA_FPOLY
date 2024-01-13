// Bài 1
var users = [
  { id: 1, name: "James Smith", gender: 2 },
  { id: 2, name: "Isla Brown", gender: 1 },
  { id: 3, name: "Amelia Davies", gender: 2 },
  { id: 4, name: "Jacob Evans", gender: 1 },
];
var target = document.querySelector("#target");
for (const user of users) {
  const liElement = document.createElement("li");
  liElement.classList.add("user_item");
  liElement.textContent = user.id + " - " + user.name + " - " + user.gender;
  target.appendChild(liElement);
}
// Bài 2
// Xử lý sự kiện submit form
document.querySelector("form").addEventListener("submit", (event) => {
  // Lấy dữ liệu từ form
  const id = document.querySelector("input[name='id']").value;
  const name = document.querySelector("input[name='name']").value;
  const gender = document.querySelector("select[name='gender']").value;

  // Thêm dữ liệu vào mảng
  users.push({
    id,
    name,
    gender,
  });

  // Hiển thị dữ liệu lên màn hình

  // Ngăn chặn form submit
  event.preventDefault();
});
