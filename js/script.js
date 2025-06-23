//Scroll to section function
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("scrollUpTitle")?.focus();
}

// Show/hide scroll-to-top button on scroll
window.addEventListener('scroll', function () {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    if (window.scrollY > 300) {
        scrollBtn.classList.add('scrollbtn-show');
    } else {
        scrollBtn.classList.remove('scrollbtn-show');
    }
});

// Play audio pronunciation
function playAudio() {
    const audio = document.getElementById("audio");
    if (audio) {
        audio.play();
    }
}

// Initialize image toggle functionality
function initializeImageToggle() {
    document.querySelectorAll('.toggle-container').forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const toggleImage = container.querySelector('.toggle-image');
        const caption = container.querySelector('.caption');
        const fancyboxLink = container.querySelector('#toggle-fancybox-link');

        if (!tabs.length || !toggleImage || !fancyboxLink) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Update image and caption
                const imageSrc = tab.getAttribute('data-image');
                const imageCaption = tab.getAttribute('data-caption');
                toggleImage.src = imageSrc;
                if (caption) caption.textContent = imageCaption;

                // Update fancybox link attributes
                fancyboxLink.href = imageSrc;
                fancyboxLink.setAttribute('data-caption', imageCaption);
            });
        });

        // Set initial state based on first tab
        const firstTab = tabs[0];
        const imageSrc = firstTab.getAttribute('data-image');
        const imageCaption = firstTab.getAttribute('data-caption');
        toggleImage.src = imageSrc;
        if (caption) caption.textContent = imageCaption;
        fancyboxLink.href = imageSrc;
        fancyboxLink.setAttribute('data-caption', imageCaption);
    });
}

// Initialize before & after image slider
function initializeImageComparison() {
    document.querySelectorAll('.image-comparison').forEach(container => {
        const slider = container.querySelector('.image-slider');
        const resize = container.querySelector('.image-resize');

        slider?.addEventListener('input', () => {
            resize.style.width = slider.value + '%';
        });
    });
}

// Initialize filtering functionality with autoscroll
function initializeFiltering() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const workItems = document.querySelectorAll(".work-item");
    const cardContainer = document.querySelector(".card-container");

    // Scroll to cardContainer if it's not currently visible in viewport
    function scrollToCardsIfNeeded() {
        const rect = cardContainer.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight;

        if (!isVisible) {
            const yOffset = -240; //
            const y = cardContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            workItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.classList.remove("hiding", "hidden");
                    item.style.display = "flex";
                } else {
                    item.classList.add("hiding");
                    setTimeout(() => {
                        item.style.display = "none";
                        item.classList.add("hidden");
                        item.classList.remove("hiding");
                    }, 300);
                }
            });

            scrollToCardsIfNeeded();
        });
    });
}

// Initialize typewriter effect
function initializeTypewriter() {
    const container = document.querySelector(".typewriter-container");
    const textElement = document.getElementById("typewriterText");

    if (!container || !textElement) return;

    const typingSpeed = 100;
    const deletingSpeed = 100;
    const pauseBetweenWords = 4000;
    const words = container.getAttribute("data-words").split(",");
    let wordIndex = 0;

    function typeWord(word) {
        let charIndex = 0;
        textElement.textContent = "";

        function type() {
            if (charIndex < word.length) {
                textElement.textContent += word[charIndex++];
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(() => deleteWord(word), pauseBetweenWords);
            }
        }

        type();
    }

    function deleteWord(word) {
        let charIndex = word.length;

        function erase() {
            if (charIndex >= 0) {
                textElement.textContent = word.slice(0, charIndex--);
                setTimeout(erase, deletingSpeed);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                typeWord(words[wordIndex]);
            }
        }

        erase();
    }

    typeWord(words[wordIndex]);
}

// Name scroll curve effect
function initializeScrollCurveText() {
    const text = document.querySelector('.text p');
    if (!text) return;

    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style="transform:rotate(${i * 8.6}deg)">${char}</span>`
    ).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    // Prevent right-click on all images
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("contextmenu", (e) => e.preventDefault());
    });

    initializeImageToggle();
    initializeFiltering();
    initializeTypewriter();
    initializeImageComparison();
    initializeScrollCurveText();

    // Mobile nav menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('show');
        });
    }
});