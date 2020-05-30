var sidebar = document.getElementById("sidebar");
var textBody = document.getElementById("textBody");

var windowRatio = window.innerHeight/window.innerWidth;

// Sets sidebar and body to either web, mobile 1 (iPad), or mobile 2 (iPhone)
if (windowRatio < 1.04){
    sidebar.style.width = `${innerWidth/8.5333}px`;
    textBody.style.left = `${innerWidth/8.5333}px`;
}
else if (windowRatio < 1.4){
    sidebar.style.width = `${innerWidth/4.8}px`;
    sidebar.style.backgroundImage = `url("/assets/Sidebar2.png")`;

    textBody.style.left = `${innerWidth/4.8}px`;
}
else {
    sidebar.style.width = `${innerWidth/3.2}px`;
    sidebar.style.backgroundImage = `url("/assets/Sidebar2.png")`;
    for (let i = 1; i < sidebar.children.length - 1; i++) {
        sidebar.children[i].classList.remove ("sidebarText");
        sidebar.children[i].classList.add ("sidebarTextMobile");
    }

    var footer = document.getElementById("footer");
    footer.classList.add("footerMobile");

    textBody.style.left = `${innerWidth/3.2}px`;
}

var prevBody = document.getElementById("B1")

// Sets all of the info sections to invisible
var children = textBody.children;
for (let i = 1; i < children.length; i++)
    document.getElementById(children[i].id).style.display = "none";

// Toggles whether the text is visible or not
function toggleText (clickedID) {
    var body = document.getElementById(`B${clickedID}`);
    prevBody.style.display = "none";
    prevBody = body;
    body.style.display = "initial";
}

// Changes site between mobile and web
setInterval ("changeSite()", 100);

function changeSite () {
    // Ratio of height to width
    windowRatio = window.innerHeight/window.innerWidth;
    // Changes body to mobile
    if (windowRatio > 0.85) {
        var web = document.getElementById("hWeb");
        var mobile = document.getElementById("hMobile");
        web.style.display = "none";
        mobile.style.display = "initial";

        var footer = document.getElementById("footer");
        if (footer.classList.contains("footerMobile"))
            footer.classList.add("footerMobile");
    }
    // Changes to web
    else {
        var web = document.getElementById("hWeb");
        var mobile = document.getElementById("hMobile");
        web.style.display = "initial";
        mobile.style.display = "none";

        var footer = document.getElementById("footer");
        if (footer.classList.contains("footerMobile"))
            footer.classList.remove("footerMobile");
    }
}