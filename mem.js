var memory = {};


$(document).ready(function () {
    memory.game();
});

memory.game = function () {
    memory.card = $('.box');
    console.log(memory.card);
    memory.card.on('click',memory.choose);
}
memory.choose = function () {
    var choose = $(this);
    this.classList.toggle('flip');
    console.log(choose);
    console.log('i was click')
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
for (var i = 0; i < cards.length; i ++){
    $('#card'+(i+1)).attr('src',cards[i]);
}
