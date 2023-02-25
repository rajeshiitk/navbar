var icon = document.querySelectorAll(".icon");
var shadow = document.getElementById("shadow");
console.log(shadow);
console.log(icon);


function addShadow(index) {
    const image = document.createElement("img");
    image.setAttribute("src", "shadow.png");
    image.setAttribute("id", "shadow");
    icon[index].append(image);
}


function removeShadow(){
    var shadow = document.getElementById("shadow");
    shadow.remove();
}

icon.forEach(function (val, index) {
    // console.log(val, index);
    val.addEventListener("click", function () {
        console.log(index);
        //   shadow[0].style.
        // shadow.style.transform = `translateX(${index*100})`;
        removeShadow();
        addShadow(index);

    })

})