window.onload = function () {
    const supportLinks = document.querySelectorAll('a.support-link');

    supportLinks.forEach( link => {
        //link.addEventListener('click', () => {
        link.onclick = () => {
            alert("Sorry, this link is not setup yet, please try again later.");
        };
    });
    console.log(supportLinks.values().next())
};