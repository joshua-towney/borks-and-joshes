console.log('Wlcome to Borks and Joshes')

var button = document.querySelectorAll('button');


function buttonHoverColor(event) {
    let theOneHoveredOn = event.target;
    theOneHoveredOn.style.backgroundColor = "lightblue"
}

function buttonNoHoverColor(event) {
    let theOneHoveredOn = event.target;
    theOneHoveredOn.style.backgroundColor = "white"
}

button.forEach(function(scrollOver) {
    scrollOver.addEventListener('mouseover', buttonHoverColor)
});
button.forEach(function(scrollOver) {
    scrollOver.addEventListener('mouseout', buttonNoHoverColor)
});
