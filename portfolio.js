var character = ["fullbody.jpeg", "character1.jpg", "character3.jpg", "character2.jpg", "character4.jpg", "character5.jpg", 0]
var threed = ["3d1.jpg", "3d2.jpg", "angledbedroom.jpg", 0]
var prop = ["prop1.jpg", "prop2.jpg", 0]
var visdev = ["recoloredmultiple.png", "visdev1.jpg", "visdev2.jpg", "visdev3.jpg", "space.jpg", 0]
var environment = ["treeoflife.png", "promoFinal.jpg", "buildings.png", "visdev.jpg", "background.png", 0]
var slideshow = document.getElementById("slideshow");
var map = {"charDesign": character, "3d": threed, "props":prop, "visdev":visdev, "env":environment};
var choice = "charDesign";
changeCategory(choice);


function changeCategory(category) {
    document.getElementById(choice).style.textDecoration = "initial";
    document.getElementById(category).style.textDecoration = "overline";
    choice = category;
    slideshow.src = map[category][0];
}

function changeSlide(direction) {
    let len = map[choice].length;
    var index;
    if (direction) {
        index = map[choice][len - 1]++;
        index++;
        if (index >= len - 1) {
            index = 0;
            map[choice][len - 1] = 0;
        }
    }
    else {
        index = map[choice][len - 1]--;
        index--;
        if (index < 0) {
            index = len - 2;
            map[choice][len - 1] = len - 2;
        }
    }
    slideshow.src = map[choice][index];  
}

