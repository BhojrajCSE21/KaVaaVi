document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Smooth hover effect for "KA-VA-VI"
    const ka = document.querySelector('.ka');
    const vaa = document.querySelector('.vaa');
    const vi = document.querySelector('.vi');

    ka.addEventListener('mouseover', () => {
        ka.style.transition = "all 0.5s ease";
        ka.textContent = "कला"; // Marathi equivalent for KA
    });
    ka.addEventListener('mouseout', () => {
        ka.textContent = "Ka";
    });

    vaa.addEventListener('mouseover', () => {
        vaa.style.transition = "all 0.5s ease";
        vaa.textContent = "वाणिज्य"; // Marathi equivalent for VA
    });
    vaa.addEventListener('mouseout', () => {
        vaa.textContent = "Vaa";
    });

    vi.addEventListener('mouseover', () => {
        vi.style.transition = "all 0.5s ease";
        vi.textContent = "विज्ञान"; // Marathi equivalent for VI
    });
    vi.addEventListener('mouseout', () => {
        vi.textContent = "Vi";
    });

    
});

document.addEventListener('DOMContentLoaded', () => {
    const logosContainer = document.querySelector('.logos');
    const logos = logosContainer.innerHTML;
    logosContainer.innerHTML += logos; // Duplicate logos for infinite loop effect
    
    const totalLogosWidth = logosContainer.scrollWidth;
    const logosWidth = logosContainer.firstElementChild.clientWidth;
    
    let startTime = null;
    const duration = 100000; // 20 seconds

    function scrollLogos(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        const progress = elapsed / duration;
        const translateX = totalLogosWidth * progress;
        
        logosContainer.style.transform = `translateX(${-translateX}px)`;

        if (elapsed < duration) {
            requestAnimationFrame(scrollLogos);
        } else {
            startTime = null; // Reset start time to loop again
            logosContainer.style.transform = `translateX(0)`;
            requestAnimationFrame(scrollLogos);
        }
    }

    requestAnimationFrame(scrollLogos);
});
