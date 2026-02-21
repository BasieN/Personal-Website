document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".nav-overlay");

    //Mobile nav toggle
    function openMenu() {
        navMenu.classList.add("show");
        overlay.classList.add("show");
        hamburger.classList.add("open");
        document.body.classList.add("no-scroll");
    }

    function closeMenu() {
        navMenu.classList.remove("show");
        overlay.classList.remove("show");
        hamburger.classList.remove("open");
        document.body.classList.remove("no-scroll");
    }

    hamburger.addEventListener("click", () => {
        if (navMenu.classList.contains("show")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    //Active page highlighting
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-menu a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    document.querySelectorAll('.highlight-card').forEach(card => {
        card.addEventListener('click', () => {
            const link = card.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
    
});