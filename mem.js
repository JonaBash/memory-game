var memory = {};


$(document).ready(function () {
    memory.game();
});

memory.game = function () {
    memory.card = $('.box');
    memory.card.on('click', memory.choose);
}
memory.clickCounter = 0;
memory.winCounter = 0;
memory.firstCheck;
memory.secondCheck;
memory.arrCheckFirst;
memory.arrCheckSecond;
memory.fc; 
memory.sc;

memory.choose = function () {
    this.classList.toggle('flip');
    memory.clickCounter++;


    if (memory.clickCounter == 1) {
        memory.fc = this;
        $(this).css('pointer-events', 'none');
        memory.firstCheck = $(this).attr('id');
        memory.arrCheckFirst = memory.firstCheck.substring(2);
    }
    if (memory.clickCounter == 2) {
        memory.sc = this;
        $('.container').css('pointer-events', 'none');
        $(memory.sc).css('pointer-events', 'none');
        memory.secondCheck = $(this).attr('id');
        memory.arrCheckSecond = memory.secondCheck.substring(2);
        if (memory.cards[memory.arrCheckFirst] === memory.cards[memory.arrCheckSecond]) {
            memory.winCounter++;
            memory.fc.classList.add('two');
            memory.sc.classList.add('two');
        } 
        else {
            $(memory.fc).removeAttr('style', 'pointer-events');
            $(memory.sc).removeAttr('style', 'pointer-events');
        }

        setTimeout(function () {
            $('.container').removeAttr('style', 'pointer-events');
            memory.fc.classList.remove('flip');
            memory.sc.classList.remove('flip');
        }, 1000);
        memory.clickCounter = 0;
    }

    if (memory.winCounter == memory.cards.length / 2) {
        $('.container').css('display', 'none');
        $("body").append("<h1>You won!!!!</h1>");
    }
}
memory.cards = [
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
function shuffle(e) {
    var j, x, i;
    for (i = e.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i));
        x = e[i];
        e[i] = e[j];
        e[j] = x;
    }
    return e;
}
shuffle(memory.cards);
for (var i = 0; i < memory.cards.length; i++) {
    $('#card' + (i + 1)).attr('src', memory.cards[i]);
}
