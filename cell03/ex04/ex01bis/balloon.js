$(document).ready(function() {
    let colorOrder = ['red', 'green', 'blue'];
    let colorIndex = 1;
    let size = 200; 
    $('#balloon').click(function() {
        size += 10;
        $(':root').css('--color', colorOrder[colorIndex]);
        colorIndex = (colorIndex + 1) % colorOrder.length;
        if (size > 420) {
            size = 200;
            $(':root').css('--color', 'red'); 
        }
        $(':root').css('--size', size + 'px');
    });

    $('#balloon').mouseout(function() {
        if (size > 200) {
            size -= 5;
            colorIndex = (colorIndex - 1 + colorOrder.length) % colorOrder.length;
            $(':root').css('--color', colorOrder[colorIndex]);
            $(':root').css('--size', size + 'px');
        }
    });
});
