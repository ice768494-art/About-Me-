const themeToggle = document.getElementById("themeToggle");
const message = document.getElementById("message");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  themeToggle.textContent = dark ? "☀️" : "🌙";
});

document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      message.textContent = "✅ Link copied!";
      setTimeout(() => message.textContent = "", 1800);
    } catch {
      message.textContent = "Copy failed — long press the link instead.";
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
