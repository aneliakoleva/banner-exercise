
    console.log("dfd");
    $(".baner-wrapper").fadeIn();

    function appear() {
        $("#copy1").slideDown();
    }
    function dessappear() {
        $("#copy1").slideUp();
    }
    function appearTwo() {
        $("#copy2").slideDown();
    }
    function dessappearTwo() {
        $("#copy2").slideUp();
    }
    function appearThree() {
        $("#copy3").slideDown();
    }
    function dessappearThree() {
        $("#copy3").slideUp();
    }
    function appearFour() {
        $("#copy4").slideDown();
        $(this).css({'transform':'skew(50px)', 'transform-origin': 'left top'});
    };
    function dessappearFour() {
        $("#copy4").slideUp();
    }
    function appearFive() {
        $("#copy5").slideDown();
    }
    function dessappearFive() {
        $("#copy5").slideUp();
    }
setTimeout(appear,  1000);
setTimeout(dessappear, 3000);
setTimeout(appearTwo,  3500);
setTimeout(dessappearTwo, 7000);
setTimeout(appearThree,  7500);
setTimeout(dessappearThree, 13000);
setTimeout(appearFour, 8000);
setTimeout(dessappearFour, 13000);
setTimeout(appearFive, 10000);
setTimeout(dessappearFive, 13000);
