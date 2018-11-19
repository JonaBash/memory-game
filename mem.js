var memory = {};


$(document).ready(function () {
    memory.game();
});

memory.game = function () {
    memory.card = $('.box');
    memory.card.on('click', memory.choose);
}
var clickCounter = 0;
var winCounter = 0;
var firstCheck;
var secondCheck;
var arrCheckFirst;
var arrCheckSecond;
var fc, sc;

memory.choose = function () {
    this.classList.toggle('flip');
    clickCounter++;


    if (clickCounter == 1) {
        fc = this;
        $(this).css('pointer-events', 'none');
        firstCheck = $(this).attr('id');
        arrCheckFirst = firstCheck.substring(2);
        console.log(arrCheckFirst);
    }
    if (clickCounter == 2) {
        $(fc).removeAttr('style', 'pointer-events');
        sc = this;
        $('.container').css('pointer-events', 'none');
        secondCheck = $(this).attr('id');
        arrCheckSecond = secondCheck.substring(2);
        console.log(arrCheckSecond);
        if (cards[arrCheckFirst] === cards[arrCheckSecond]) {
            winCounter++;
            fc.classList.add('two');
            sc.classList.add('two');
            console.log(winCounter);
        }

        setTimeout(function () {
            $('.container').removeAttr('style', 'pointer-events');
            fc.classList.remove('flip');
            sc.classList.remove('flip');
        }, 1000);
        clickCounter = 0;
    }

    if (winCounter == cards.length / 2) {
        $('.container').css('display', 'none');
        $("body").append("<h1>You won!!!!</h1>");
    }
}
var cards = [
    "./img/hanzo.png",
    "./img/junkrat.png",
    "./img/genji.png",
    "./img/widow.png",
    "./img/reaper.png",
    "./img/phara.png",
    "./img/reinheart.png",
    "./img/mccree.png",
    "./img/zarya.png",
    "./img/hanzo.png",
    "./img/junkrat.png",
    "./img/genji.png",
    "./img/widow.png",
    "./img/reaper.png",
    "./img/phara.png",
    "./img/reinheart.png",
    "./img/mccree.png",
    "./img/zarya.png"
];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(cards);
for (var i = 0; i < cards.length; i++) {
    $('#card' + (i + 1)).attr('src', cards[i]);
}
