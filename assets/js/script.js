// Toggle experiencia
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling;
        content.classList.toggle('active');
        button.textContent = content.classList.contains('active') ? "Ver menos" : "Ver más";
    });
});
