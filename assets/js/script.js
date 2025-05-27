document.addEventListener('DOMContentLoaded', function() {
    // =====================
    // Mobile Navigation
    // =====================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // =====================
    // Smooth Scrolling
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =====================
    // Sticky Navbar on Scroll
    // =====================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // =====================
    // Skills Chart
    // =====================
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Data Visualization', 'Process Optimization'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 88, 75, 80, 85],
                backgroundColor: 'rgba(41, 128, 185, 0.2)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(41, 128, 185, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        backdropColor: 'transparent',
                        color: 'rgba(0, 0, 0, 0.7)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            family: "'Roboto', sans-serif",
                            size: 12
                        },
                        color: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
               
