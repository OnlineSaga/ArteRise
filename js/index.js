
const bigCursor = document.querySelector(".big-cursor");
const smallCursor = document.querySelector(".small-cursor");


// Update the position of the div element with a little delay on mousemove and scroll events
document.addEventListener("mousemove", (e) => {
    updateCursorPos(e.clientX, e.clientY);
});


document.addEventListener("scroll", () => {
    updateCursorPos(cursorX, cursorY);
});

// Helper function to update the position of the cursor element
let cursorX = 0;
let cursorY = 0;

function updateCursorPos(x, y) {
    cursorX = x;
    cursorY = y;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    smallCursor.style.left = cursorX + scrollX + "px";
    smallCursor.style.top = cursorY + scrollY + "px";
    setTimeout(() => {
        bigCursor.style.left = cursorX + scrollX + "px";
        bigCursor.style.top = cursorY + scrollY + "px"
    }, 100); // add a delay of 100ms
}

// Hide the overlay once the page has loaded
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const overlayLogo = document.querySelector('.overlay-logo');
    const overlayHead = document.querySelector('.overlay-head');
    overlay.style.display = 'flex';
    overlayLogo.style.opacity = '1';
    overlayHead.style.opacity = '1';

    // Hide the overlay after a delay
    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 2500);
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000);
});


function hamburger(x) {
    x.classList.toggle("change");
}
