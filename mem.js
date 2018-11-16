var memory = {};

$(document).ready(function () {
    memory.game();
});

memory.game = function () {
    memory.card = $('.box');
    memory.card.on('click',memory.flip);
}
memory.flip = function () {
    var flip = $(this);
    console.log(flip);
    console.log('i was click')
}

