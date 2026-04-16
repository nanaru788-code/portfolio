/* ================= script.js ================= */
function toggleMenu(btn) {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
  btn.classList.toggle("active");
}

// フェードイン
const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fades.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// フォーム送信
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "送信ありがとうございました！";
  form.reset();
});
