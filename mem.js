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

