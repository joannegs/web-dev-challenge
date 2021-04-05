const inputs = document.querySelectorAll(".controls input");

const eyes = document.querySelectorAll(".eye")
const ear = document.querySelectorAll(".inner-ear")
const nose = document.querySelectorAll(".nose")



function handleUpdate() {
  eyes.forEach(eye => eye.style.background = inputs[0].value)
  ear.forEach(ear => ear.style.background = inputs[1].value)
  nose.forEach(nose => nose.style.background = inputs[2].value)


}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

