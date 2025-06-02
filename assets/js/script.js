// ========================
// DARK / LIGHT MODE TOGGLE
// ========================
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Verifica el modo guardado previamente
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });

  // Footer dinámico con año actual
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Descargar CV
  const downloadCV = document.getElementById("download-cv");
  if (downloadCV) {
    downloadCV.addEventListener("click", function () {
      window.open("CV.pdf", "_blank");
    });
  }
});
