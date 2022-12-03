var character = ["fullbody.jpeg", "character1.jpg", "character3.jpg", "character2.jpg", "character4.jpg", "character5.jpg", 0]
var threed = ["3d1.jpg", "3d2.jpg", "angledbedroom.jpg", 0]
var prop = ["prop1.jpg", "prop2.jpg", 0]
var visdev = ["recoloredmultiple.png", "visdev1.jpg", "visdev2.jpg", "visdev3.jpg", "space.jpg", 0]
var environment = ["treeoflife.png", "promoFinal.jpg", "buildings.png", "visdev.jpg", "background.png", 0]
var choice = "charDesign"; 
var slideshow = document.getElementById("slideshow");

class HashMap {
    constructor(initialCapacity = 5) {
        this.buckets = new Array(initialCapacity);
        this.collisions = 0;
    }
    
    set(key, value) {
        const bucketIndex = this.getIndex(key);
        if(this.buckets[bucketIndex]) {
            this.buckets[bucketIndex].push({key, value});
        if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
        } else {
            this.buckets[bucketIndex] = [{key, value}];
        }
        return this;
    }
    
    get(key) {
        const bucketIndex = this.getIndex(key);
        for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
            const entry = this.buckets[bucketIndex][arrayIndex];
            if(entry.key === key) {
                return entry.value
            }
        }
    }
    
    hash(key) {
        let hashValue = 0;
        const stringTypeKey = `${key}${typeof key}`;
        
        for (let index = 0; index < stringTypeKey.length; index++) {
            const charCode = stringTypeKey.charCodeAt(index);
            hashValue += charCode << (index * 8);
        }
        
        return hashValue;
    }
    
    getIndex(key) {
        const indexHash = this.hash(key);
        const index = indexHash % this.buckets.length;
        return index;
    }
}

var map = new HashMap();
map.set("charDesign", character);
map.set("3d", threed);
map.set("props", prop);
map.set("visdev", visdev);
map.set("env", environment);

changeCategory(choice);


function changeCategory(category) {
    document.getElementById(choice).style.textDecoration = "initial";
    document.getElementById(category).style.textDecoration = "overline";
    choice = category;
    slideshow.src = map.get(choice)[0];
}

function changeSlide(direction) {
    let len = map.get(choice).length;
    var index;
    if (direction) {
        index = map.get(choice)[len - 1]++;
        index++;
        if (index >= len - 1) {
            index = 0;
            map.get(choice)[len - 1] = 0;
        }
    }
    else {
        index = map.get(choice)[len - 1]--;
        index--;
        if (index < 0) {
            index = len - 2;
            map.get(choice)[len - 1] = len - 2;
        }
    }
    slideshow.src = "portfolio/" + map.get(choice)[index];  
}


