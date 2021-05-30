function resize() {
    console.log ("RESIZE");
    let frames = document.getElementsByTagName('iframe')
    // document.getElementById().clientWidth
    for (i of frames) {
        i.style.width = '100%'
        console.log (i.clientWidth);
        i.style.height = `${i.clientWidth / 1.78}px`
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    resize();
});

// Resizes videos to 16:9 aspect ratio on window resize
window.addEventListener('resize', resize);