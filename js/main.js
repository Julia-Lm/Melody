$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterText = $('.counter');
    var counterUp = $('.counter-arrow-up');
    var counterDown = $('.counter-arrow-down');
    var modal = $('.modal');
    var modalClouseButton = $('.modal-clouse-button');
    var flatPath = $('.flats path');
    var viewFlatsBtn = $('.view-flats');
    var flatItem = $('.flat-item');
    var flatlLnk = $('.flat-link');

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

    function toggleModal(){
        modal.toggleClass('is-open');
    }

    floorPath.on('click', toggleModal);

    modalClouseButton.on('click', toggleModal);

    viewFlatsBtn.on('click', toggleModal);

    flatItem.on('mouseover', function(){
        var flat = $(this).index();
        flatPath.removeClass("current-flat");
        $(`[data-flat=${flat}]`).toggleClass('current-flat');
        flatlLnk.removeClass("is-active");
    });

    flatPath.on('mouseover', function(){
        flatPath.removeClass("current-flat");
        var flat = $(this).attr('data-flat');
        flatlLnk.removeClass("is-active");
        flatItem.eq(flat).find('a').toggleClass('is-active');
    });

    flatPath.on('mouseout', function(){
        flatlLnk.removeClass("is-active");
    });
    flatItem.on('mouseout', function(){
        flatPath.removeClass("current-flat");
    });
});