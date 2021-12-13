$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterText = $('.counter-text');
    var counterUp = $('.counter-arrow-up');
    var counterDown = $('.counter-arrow-down');

    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        counterText.text(currentFloor);
    });

    counterUp.on('click', function(){
        if(currentFloor < 18){
            currentFloor++;
            var usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, 
                useGroupping: false});
            counterText.text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function(){
        if(currentFloor > 2){
            currentFloor--;
            var usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, 
                useGroupping: false});
            counterText.text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
});