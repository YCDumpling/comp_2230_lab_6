/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */
function showTopBanner() {
    if (sessionStorage.getItem("topBannerClosed") === "true") {
        return;
    }
    var banner = document.getElementById("top-banner");
    banner.classList.remove("hide");
    setTimeout(function () {
        banner.classList.add("show");
    }, 50); // Delay to ensure the transition is triggered
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {
    if (getCookie("footerBannerClosed") === "true") {
        return;
    }
    document.getElementById("footer-banner").classList.remove("hide");
}

/**
 * Displays the modal by removing the 'hide' class from it.
 */
function showModal() {

    if (localStorage.getItem("modalClosed") === "true") {
        return;
    }
    document.getElementById("modal").classList.remove("hide");
}



/**
 * Hides the modal by adding the 'hide' class to it.
 */
function closeModal() {
    document.getElementById("modal").classList.add("hide");
    if (isDoNotTrack()) {
        return;
    }
    localStorage.setItem("modalClosed", "true");
}

/**
 * Hides the top banner by adding the 'hide' class to it.
 */
function closeTopBanner() {
    document.getElementById("top-banner").classList.add("hide");
    if (isDoNotTrack()) {
        return;
    }
    sessionStorage.setItem("topBannerClosed", "true");
}

/**
 * Hides the footer banner by adding the 'hide' class to it.
 */
function closeFooterBanner() {
    document.getElementById("footer-banner").classList.add("hide");
    if (isDoNotTrack()) {
        return;
    }
    setCookie("footerBannerClosed", "true", 10);
}

/**
 * Sets a cookie with the given name, value, and expiration days.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} [days] - The number of days until the cookie expires. If not provided(null/nan), the cookie will be a session cookie.
 */
function setCookie(name, value, days) {
    // copied off the demonstration
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value}${expires}; path=/`;
}



/**
 * Gets the cookie's value based off the specified name.
 *
 * @param {string} name - The name of the cookie to get.
 * @returns {string|undefined} The value of the cookie, or undefined if the cookie does not exist.
 */
function getCookie(name) {
    // Copied off the demonstration
    return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

/**
 * Gets the browser's setting if Do not track is enabled // copied off reiner's code in the teams group chat
 *
 * @returns {bool} returns true or false if the user has the browser set to do not track
 */
function isDoNotTrack() {
    return localStorage.getItem("doNotTrack") === "true";
}

function enableDoNotTrack() {
    localStorage.setItem("doNotTrack", "true");
    document.cookie = "doNotTrack=true; path=/";
}

/**
 * Clears stored data for this site
 *
 */
function clearData() {
    // Set this to expire the cookie
    document.cookie = "footerBannerClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("modalClosed");
    localStorage.removeItem("doNotTrack");
    sessionStorage.removeItem("topBannerClosed");
}


// Annoying functions:

// Functions taking from my older assignments:
/**
 * Applies random colors to the borders of fieldsets and the background of submit buttons.
 */
function applyRandomColors() {

    function getRandomColor() {
        // taken from https://css-tricks.com/snippets/javascript/random-hex-color/
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        return '#' + randomColor.padStart(6, '0');
    }

    let elements = document.querySelectorAll("*");
    elements.forEach(element => {
        element.style.color = getRandomColor();
        element.style.backgroundColor = getRandomColor();
    });

}




// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
    .getElementById("footer-banner")
    .addEventListener("click", closeFooterBanner);

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 1000);

// Show the top banner after a delay of 2 seconds
setTimeout(showTopBanner, 2000);

// Show the modal after a delay of 4 seconds
setTimeout(showModal, 4000);


// Party time

setInterval(applyRandomColors, 10);