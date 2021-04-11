// from https://pt.stackoverflow.com/questions/31295/como-mover-elemento-aleatoriamente-pela-tela-css-ou-jquery

$(function () {
    var minSpeed = .02;
    var maxSpeed = .06;
    var varSpeed = .005;

    function startBounce(element) {
        var container = element.parent();
        var width = container.innerWidth() - element.outerWidth();
        var height = container.innerHeight() - element.outerHeight();

        var vertSpeed = ((Math.random() * (maxSpeed - minSpeed)) + minSpeed);
        var horzSpeed = ((Math.random() * (maxSpeed - minSpeed)) + minSpeed);
        bounce(element, vertSpeed, height, 'top');
        bounce(element, horzSpeed, width, 'left');
    }

    function bounce(element, speed, max, dir) {
        speed += ((Math.random() * varSpeed) - (varSpeed / 2));
        speed = speed < minSpeed ? minSpeed : (speed > maxSpeed ? maxSpeed : speed)
        var time = max / speed;
        var position = element.position();
        if (position[dir] < 2) {
            target = max;
        } else {
            target = 0;
        }

        var style = {
            queue: false
        };
        style[dir] = target;
        element.animate(style, {
            duration: time,
            queue: false,
            easing: "linear",
            complete: function () {
                bounce(element, time, max, dir);
            }
        });
    }

    function bounceBloobs(){
        for (var i = 1; i < 5; i++) {
            startBounce($(`#bloob${i}`));
        }
    }

    $(function () {
        bounceBloobs();
    });

});