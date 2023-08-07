const chatBtn = document.querySelector(".chats-btn");
const backgrounds = document.querySelector(".backgrounds");
const comment = document.querySelector(".comment");
const signOut = document.querySelector(".sign-out");

function handleShow() {
  backgrounds.classList.toggle("show");
  comment.classList.add("hidden");
}

function handleSignout() {
  if (confirm("로그아웃 하시겠습니까?") === true) {
    location.href = "/index.html";
  }
}

chatBtn.addEventListener("click", handleShow);
signOut.addEventListener("click", handleSignout);
