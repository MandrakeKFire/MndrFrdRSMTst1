document.addEventListener('DOMContentLoaded', () => {

    // Lógica para el menú hamburguesa en móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Actualizar el año en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Animación de elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- LÓGICA DEL MODAL INTERACTIVO ---
    const modal = document.getElementById('experience-modal');
    const experienceCards = document.querySelectorAll('.experience-card');
    const closeModalButton = document.querySelector('.close-button');

    experienceCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal-id');
            const contentSource = document.getElementById(`${modalId}-content`);
            
            if (contentSource) {
                // Obtener datos del HTML oculto
                const title = card.querySelector('h3').textContent;
                const company = card.querySelector('p').textContent;
                const detailsHTML = contentSource.querySelector('ul, p').cloneNode(true);
                const images = contentSource.querySelectorAll('img');

                // Poblar el modal
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-company').textContent = company;
                
                const modalBody = document.getElementById('modal-body');
                modalBody.innerHTML = ''; // Limpiar contenido anterior
                modalBody.appendChild(detailsHTML);

                const modalGallery = document.getElementById('modal-gallery');
                modalGallery.innerHTML = ''; // Limpiar galería anterior
                images.forEach(img => {
                    const galleryImage = img.cloneNode(true);
                    modalGallery.appendChild(galleryImage);
                });
                
                // Mostrar el modal
                modal.style.display = 'block';
            }
        });
    });

    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeModalButton.addEventListener('click', closeModal);

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
