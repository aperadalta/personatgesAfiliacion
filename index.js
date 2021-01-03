var win = $(window),
    sectionHeight = 1100,
    currentSection = 0,
    lastSection = 0;

function changeCircles(n){
    let child = `.pjs:nth-child(${n})`;

    $('.pjs').css({
        "height": "40px",
        "width": "40px",
        "margin-left": "-23px",
        "border": "2px grey solid",
        "box-shadow": "none"
    })

    $(child).css({
        "height": "46px",
        "width": "46px",
        "margin-left": "-26px",
        "border": "3px black solid",
        "box-shadow": "0px 0px 10px 5px rgb(102, 186, 255)"
    })
}

function disappear(n, n2){
    let child = `.full:nth-child(${n2})`;

    

    if(n > n2){
        $(child).css({
            "opacity": "0",
            "transform": "scale(2)"
        })
        $('#titol').css("opacity", "0");
    } else {
        $(child).css({
            "opacity": "0",
            "transform": "scale(0.1)"
        })
        if(n == 0) $('#titol').css("opacity", "1");
    }
}

function appear(n){
    let child = `.full:nth-child(${n})`;
    $(child).css({
        "opacity": "1",
        "transform": "scale(1)"
    })
}

function fullClear(){
    $('.full').css({
        "opacity": "0"
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

       myFunction(currentSection, lastSection);
        
       changeCircles(currentSection);
       appear(currentSection); 
       disappear(currentSection, lastSection)
    }
});


/* 
function fullClear(){
    $('.full').css({
        "opacity": "0"
    })
}

$('.pjs').click((e)=>{
    var index = e.target.id;

    fullClear();
    appear(index);
    changeCircles(index);
}) */