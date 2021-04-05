const button = document.getElementById("timmer-controller");
const input = document.getElementById("counter");
const status = document.getElementById("status-info");
const resetor = document.getElementById("resetor");

button.addEventListener("click", click);
resetor.addEventListener("click", reset_timer);

input.addEventListener("keyup", () => {
    if (input.checkValidity()) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    };
});

// ":" auto complete
input.addEventListener("keypress", (input_data) => {
    if (input.value.length == 2 && input.value[1] != ":" && input_data.key != ":") {
        input.value += ":"
    };
});

var interval;

function click() {
    if (button.innerHTML == "pause timer") {
        clearInterval(interval);
        button.innerHTML = "resume";
    } else if (button.innerHTML == "reset timer") {
        reset_timer();
    } else {
        start_timer();
    }
}

function reset_timer() {
    clearInterval(interval);
    button.setAttribute("class", "start-btn");
    input.setAttribute("class", " ");
    button.innerHTML = "start timer";
    status.innerHTML = "Awesome Timer";
    input.value = "0:00";
    resetor.style.visibility = "hidden";
}

function start_timer() {
    var time = input.value;
    var minutes = time.split(":")[0];
    var seconds = time.split(":")[1];

    const then = new Date;

    then.setMinutes(then.getMinutes() + Number(minutes));
    then.setSeconds(then.getSeconds() + Number(seconds) + 1); // 0 secs to start execute

    if (then.getMinutes == NaN || then.getSeconds == NaN) {
        console.log("DUH")
    }


    button.setAttribute("class", "stop-btn");
    button.innerHTML = "pause timer";
    status.innerHTML = "Time Remaining:";
    resetor.style.visibility = "visible";

    interval = setInterval(function () {
        var now = new Date;
        var time_left = then.getTime() - now.getTime();

        var minutes_left = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
        var seconds_left = Math.floor((time_left % (1000 * 60)) / 1000);


        if (String(seconds_left).length == 1) {
            input.value = minutes_left + ":0" + seconds_left;
        } else {
            input.value = minutes_left + ":" + seconds_left;
        }

        if (time_left < 0) {
            clearInterval(interval);

            input.setAttribute("class", "expired-time-input");
            input.value = "0:00";
            button.innerHTML = "reset timer";
            status.innerHTML = "Time's up!";
            resetor.style.visibility = "hidden";
        }

    }, 1000);
}


