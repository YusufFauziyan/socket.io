const btn_kirim = document.querySelector("#kirim");
const input = document.querySelector("#input");
const div_display = document.querySelector(".container-pesan");

const socket = io();
socket.on("connect", () => console.log("socket connected!"));

const createBubleChat = (chat) => {
  const div_pesan = document.createElement("div");
  div_pesan.classList.add("pesan");
  div_pesan.innerHTML = chat;
  return div_pesan;
};

btn_kirim.addEventListener("click", () => {
  const bubleChat = createBubleChat(input.value);
  div_display.appendChild(bubleChat);
  socket.emit("kirim-pesan", input.value);
  input.value = "";
});

socket.on("pesan-baru", (pesan) => {
  const bubleChat = createBubleChat(pesan);
  bubleChat.classList.add("pesan-r");
  div_display.appendChild(bubleChat);
});
