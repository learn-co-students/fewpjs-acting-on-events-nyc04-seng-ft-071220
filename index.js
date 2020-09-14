var dodger = document.getElementById("dodger");
dodger.style.background = "#ff69b4";
// console.log(dodger.style.left);
// console.log(dodger.style.bottom);
// dodger.style.bottom= "100px";
// dodger.style.bottom= "0px";

// document.addEventListener("keydown", function(e){
//     if (e.key === "ArrowLeft"){
//         let leftNumbers = dodger.style.replace("px", "");
//         let left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left - 1}px`;
//     }
// });

//let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left - 20}px`
    }
}

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var right = parseInt(leftNumbers, 10)
    if (right < 360) {
      dodger.style.left = `${right + 20}px`
    }
  }

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});