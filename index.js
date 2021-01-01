var win = $(window),
    sectionHeight = 1000,
    currentSection = 0,
    lastSection = 0;

function changeCircles(n){
    let child = `.pjs:nth-child(${n})`;

    $('.pjs').css({
        "height": "30px",
        "width": "30px",
        "margin-left": "-18px",
        "border": "0px black solid"
    })

    $(child).css({
        "height": "36px",
        "width": "36px",
        "margin-left": "-21px",
        "border": "3px black solid"
    })
}

function disappear(n, n2){
    let child = `.full:nth-child(${n2})`;

    if(n > n2){
        $(child).css({
            "opacity": "0",
            "transform": "scale(2)"
        })
    } else {
        $(child).css({
            "opacity": "0",
            "transform": "scale(0.1)"
        })
    }
}

function appear(n){
    let child = `.full:nth-child(${n})`;

    $(child).css({
        "opacity": "1",
        "transform": "scale(1)"
    })
}

function myFunction(n, n2) {
    console.log(n +" "+n2);
}

win.scroll(function (e) {
    var calculateSection = parseInt(win.scrollTop() / sectionHeight, 10);
    if (currentSection !== calculateSection) {
        lastSection = currentSection
        currentSection = calculateSection;

       // myFunction(currentSection, lastSection);
        
       changeCircles(currentSection);
       appear(currentSection); 
       disappear(currentSection, lastSection)
    }
});


$('.pjs').click((e)=>{
    var index = e.target.id;
    
    appear(index);
    changeCircles(index);
})