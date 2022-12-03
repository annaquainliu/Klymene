var tabClicked = false;

function tabclicked() {
    var opentab = document.getElementById("openTab");
    var tab = document.getElementById("tab");
    tabClicked = !tabClicked;

    if (tabClicked) {
        tab.textContent = 'Description of Graphic▲';
        opentab.style.opacity = 1;
    }
    else {
        tab.textContent = 'Description of Graphic▼';
        opentab.style.opacity = 0;
    }

}