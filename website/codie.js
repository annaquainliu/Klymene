let scroll = false;
 var introBox = document.getElementById("scrollOpacity");

window.addEventListener('scroll', function(e) {
    let x = window.scrollY / 600;
    if (x > 0.5) {
      x = 0.5;
    }
    introBox.style.opacity = x;
});