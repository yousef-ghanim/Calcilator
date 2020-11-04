const btns = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");
const screen = document.querySelector(".screen");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
  });
}

equalBtn.addEventListener("click", function() {
  if (screen.value === "") {
    alert("insert valid value");
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clearBtn.addEventListener("click", function() {
  screen.value = "";
});
