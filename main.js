function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 10);
}

onReady(function() {
    update();
    setInterval ("update()", 100);
    setTimeout(() => {
        let body = document.getElementById("invis")
        body.classList.remove ("invisible")
        let invis = document.getElementById ("load-background")
        let invisLoader = document.getElementById ("load-spinner")
        invis.classList.add("invisible")
        invisLoader.classList.add("invisible")
    }, 250);
});


var FuzzCircle;
var left = false;
var right = false;
var rotation = 0;
var velocity = 0.5;
var vIncrement = 0.1;

function update () {
    changeSite();

    spinner();

    // pulse ();
    
}

function changeSite () {
    // Ratio of height to width
    var windowRatio = window.innerHeight/window.innerWidth;

    // Changes body to mobile
    if (windowRatio > 1.4) {
        var web = document.getElementById("web");
        var mobile = document.getElementById("mobile");
        var mobile2 = document.getElementById("mobile2");
        web.style.display = "none";
        mobile.style.display = "none";
        mobile2.style.display = "initial";

        var body = document.getElementById("body");        
        body.classList.remove("bodyMobile");
        body.classList.remove("bodyMain");
        body.classList.add("bodyMobile2");

        FuzzCircle = document.getElementById("FuzzCircleMobile2");
        FuzzCircle.classList.remove("FuzzCircle")
        FuzzCircle.classList.remove("FuzzCircleX")
        FuzzCircle.classList.add("FuzzCircleMobile2")

        // Changes it to iPhone X standards
        var logo = document.getElementById("logoMobile2");
        if (windowRatio > 2.15) {
            logo.classList.add("logoMobileX");
            FuzzCircle.classList.add ("FuzzCircleX");
            console.log (FuzzCircle)
        }
        else if (typeof logoMobile2 != "undefined")
            if (logo.classList.contains("logoMobileX")){
                logo.classList.remove ("logoMobileX")
                FuzzCircle.classList.remove ("FuzzCircleX");
            }
    }
    // Changes to tablet
    else if (windowRatio > 1.15) {
        var web = document.getElementById("web");
        var mobile = document.getElementById("mobile");
        var mobile2 = document.getElementById("mobile2");
        web.style.display = "none";
        mobile2.style.display = "none";
        mobile.style.display = "initial";

        var body = document.getElementById("body");        
        body.classList.remove("bodyMain");
        body.classList.remove("bodyMobile2");
        body.classList.add("bodyMobile");

        FuzzCircle = document.getElementById("FuzzCircleMobile");
        FuzzCircle.classList.remove("FuzzCircleX")
        FuzzCircle.classList.remove("FuzzCircleMobile2")
        FuzzCircle.classList.add("FuzzCircle")
    }
    // Changes to web
    else {
        var web = document.getElementById("web");
        var mobile = document.getElementById("mobile");
        var mobile2 = document.getElementById("mobile2");
        web.style.display = "initial";
        mobile.style.display = "none";
        mobile2.style.display = "none";

        var body = document.getElementById("body");        
        body.classList.remove("bodyMobile");
        body.classList.remove("bodyMobile2");
        body.classList.add("bodyMain");

        FuzzCircle = document.getElementById("FuzzCircleWeb");
        FuzzCircle.classList.remove("FuzzCircleX")
        FuzzCircle.classList.remove("FuzzCircleMobile2")
        FuzzCircle.classList.add("FuzzCircle")
    }
}

// Toggles triangles
function toggle (clickedID) {
    var div = document.getElementById(clickedID);
    var triangle = div.children[0];
    var text = div.children[1];
    triangle.style.display = "initial";
    text.classList.add ("selected");
}
function toggleOff  (clickedID) {
    var div = document.getElementById(clickedID);
    var triangle = div.children[0];
    var text = div.children[1];
    triangle.style.display = "none";
    text.classList.remove ("selected");
}

// Pulses icon
function pulse () {
    var ytLogo = document.getElementById ("ytWeb");
    var discordLogo = document.getElementById ("discordWeb");
}

function spinner () {

    if (velocity > 1.5)
        velocity = 1.5

    if (rotation > 40){
        left = true; left = false
        velocity += vIncrement
    }
    else if (rotation < -40){
        left = false; left = true
        velocity += vIncrement
    }

    if (!left && !right){
        var random = Math.floor(Math.random() * 10) + 1;
        if (random > 5) {
            right = true; left = false
        }
        else {
            left = true; left = false
        }
    }

    else if (left) {
        var random = Math.floor(Math.random() * 100) + 1;
        if (random >= 2) {
            rotation += velocity
        }
        else {
            left = false; right = true
            velocity += vIncrement
        }
    }

    else {
        var random = Math.floor(Math.random() * 100) + 1;
        if (random >= 2) {
            rotation += -velocity
        }
        else {
            left = true; right = false
            velocity += vIncrement
        }
    }

    FuzzCircle.style.transform = `rotate(${rotation}deg)`;

}