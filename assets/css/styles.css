/* --- VARIABLES Y ESTILOS GLOBALES --- */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --background-color: #f4f6f8;
    --text-color: #333;
    --card-bg-color: #ffffff;
    --white-color: #ffffff;
    --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Lato', sans-serif;
    --transition: all 0.3s ease-in-out;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
    font-family: var(--font-body);
    color: var(--text-color);
    background-color: var(--background-color);
    line-height: 1.7;
}
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
h1, h2, h3 { font-family: var(--font-heading); font-weight: 600; color: var(--primary-color); line-height: 1.2; }
.section { padding: 80px 0; }
.section-title { font-size: 2.5rem; text-align: center; margin-bottom: 20px; }
.section-subtitle { text-align: center; margin-bottom: 50px; color: #7f8c8d; font-size: 1.1rem; }
.bg-light { background-color: #ecf0f1; }

/* --- NAVEGACIÓN --- */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: fixed;
    top: 0; left: 0; right: 0;
    width: 100%;
    background-color: var(--primary-color);
    z-index: 1000;
    transition: var(--transition);
}
.logo { font-size: 1.8rem; font-weight: 700; color: var(--white-color); text-decoration: none; }
.nav-menu { display: flex; list-style: none; gap: 35px; }
.nav-menu a { color: var(--white-color); text-decoration: none; font-weight: 600; }
.hamburger { display: none; background: none; border: none; color: var(--white-color); font-size: 1.5rem; cursor: pointer; }

/* --- SECCIÓN PERFIL PROFESIONAL --- */
#profile { padding-top: 150px; }
.profile-layout { display: flex; align-items: center; gap: 50px; }
.profile-image { flex-basis: 300px; }
.profile-image img { width: 100%; border-radius: 50%; border: 8px solid var(--secondary-color); }
.profile-text { flex: 1; }
.profile-text h1 { font-size: 3rem; }
.profile-text .subtitle { font-size: 1.3rem; color: var(--secondary-color); font-weight: 600; margin: 10px 0; }
.profile-text p { margin-bottom: 15px; }

/* --- SECCIÓN LOGROS --- */
.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}
.achievement-card {
    background-color: var(--white-color);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
}
.achievement-card:hover { transform: translateY(-5px); }
.achievement-card i { font-size: 2.5rem; color: var(--secondary-color); margin-bottom: 15px; }
.achievement-card h3 { font-size: 1.2rem; margin-bottom: 10px; }

/* --- SECCIÓN EXPERIENCIA INTERACTIVA --- */
.experience-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.experience-card {
    background-color: var(--card-bg-color);
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding: 30px;
    transition: var(--transition);
    cursor: pointer;
}
.experience-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); }
.card-header h3 { font-size: 1.4rem; }
.card-header p { color: var(--secondary-color); font-weight: 600; }

/* --- MODAL --- */
.modal {
    display: none;
    position: fixed;
    z-index: 1001;
    left: 0; top: 0;
    width: 100%; height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.6);
}
.modal-content {
    background-color: #fff;
    margin: 5% auto;
    padding: 40px;
    border-radius: 10px;
    width: 80%;
    max-width: 800px;
    position: relative;
    animation: slide-down 0.5s ease-out;
}
.close-button {
    color: #aaa;
    position: absolute;
    top: 15px; right: 25px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}
.close-button:hover { color: #333; }
#modal-title { font-size: 2rem; margin-bottom: 5px; }
#modal-company { color: var(--secondary-color); font-weight: 600; margin-bottom: 20px; }
#modal-body ul { list-style-position: inside; padding-left: 10px; }
#modal-body li { margin-bottom: 10px; }
.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-top: 20px; }
.gallery img { width: 100%; border-radius: 5px; }
@keyframes slide-down { from { top: -300px; opacity: 0 } to { top: 0; opacity: 1 } }


/* --- SECCIONES DOBLES (HABILIDADES/EDUCACIÓN) --- */
.dual-section { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
.dual-section ul { list-style: none; }
.dual-section li { background-color: var(--white-color); padding: 10px 15px; border-radius: 5px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }

/* --- CONTACTO --- */
.contact-section { background-color: var(--primary-color); color: var(--white-color); text-align: center; }
.contact-section .section-title { color: var(--white-color); }
.email-link { color: var(--white-color); text-decoration: none; font-size: 1.5rem; display: block; margin: 20px 0; }
.social-links { display: flex; justify-content: center; gap: 20px; margin-top: 20px; }
.social-links a { color: var(--white-color); font-size: 1.8rem; transition: var(--transition); }
.social-links a:hover { color: var(--secondary-color); transform: scale(1.1); }

/* --- FOOTER --- */
.main-footer { background-color: #212f3d; color: var(--white-color); text-align: center; padding: 20px 0; }

/* --- ANIMACIONES --- */
.animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
.animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 992px) {
    .profile-layout { flex-direction: column; text-align: center; }
    .dual-section { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
    .nav-menu { position: fixed; top: 69px; left: -100%; width: 100%; height: calc(100vh - 69px); background-color: var(--primary-color); flex-direction: column; justify-content: center; align-items: center; transition: var(--transition); }
    .nav-menu.active { left: 0; }
    .hamburger { display: block; }
    nav { padding: 15px 20px; }
    html { scroll-padding-top: 69px; }
    #profile { padding-top: 120px; }
    .profile-text h1 { font-size: 2.5rem; }
    .modal-content { width: 90%; padding: 25px; }
    .modal-title { font-size: 1.5rem; }
}
