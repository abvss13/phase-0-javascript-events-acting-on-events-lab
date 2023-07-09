
function moveDodgerLeft() {
    const left = dodger.style.left.replace("px", "");
    const leftValue = parseInt(left, 10);
  
    if (leftValue > 0) {
      dodger.style.left = `${leftValue - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const left = dodger.style.left.replace("px", "");
    const leftValue = parseInt(left, 10);
  
    if (leftValue < 360) {
      dodger.style.left = `${leftValue + 1}px`;
    }
  }
  
