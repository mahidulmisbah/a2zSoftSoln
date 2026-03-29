/* =========================
TEAM MEMBER CAROUSEL BY GROUP
- Scrolls exactly 4 members per click
- No partial cards shown
- Fully responsive
========================= */

const container = document.getElementById("team-carousel-container");
const nextBtn = document.getElementById("team-next");
const prevBtn = document.getElementById("team-prev");

let currentIndex = 0; // Index of first visible group
const cardsPerSlide = 4; // Number of cards per slide

// Render team members
teamMembers.forEach(member => {
    container.innerHTML += `
        <div class="team-member col-md-3 col-sm-6" id="team-${member.id}">
            <div class="team">
                <div class="img-hexagon">
                    <img src="${member.image}" alt="${member.name}">
                    <span class="img-top"></span>
                    <span class="img-bottom"></span>
                </div>
                <div class="team-content">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                    <div class="team-social">
                        <a class="fb" href="${member.facebook}"><i class="fa fa-facebook"></i></a>
                        <a class="twt" href="${member.twitter}"><i class="fa fa-twitter"></i></a>
                        <a class="linkdin" href="${member.linkedin}"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Update arrow states
function updateArrows() {
    const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= totalSlides - 1;
}

// Arrow click events
nextBtn.onclick = () => {
    const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);
    if (currentIndex < totalSlides - 1) currentIndex++;
    scrollToCurrent();
};

prevBtn.onclick = () => {
    if (currentIndex > 0) currentIndex--;
    scrollToCurrent();
};

// Scroll to the current group of 4 members
function scrollToCurrent() {
    const cardWidth = container.querySelector(".team-member").offsetWidth;
    const gap = parseInt(getComputedStyle(container.querySelector(".team-member")).marginRight); // optional if you have gap
    const scrollX = (cardWidth + gap) * cardsPerSlide * currentIndex;
    container.style.transform = `translateX(-${scrollX}px)`;
    updateArrows();
}

// Recalculate on resize
window.addEventListener("resize", () => {
    scrollToCurrent();
});

// Initialize
updateArrows();