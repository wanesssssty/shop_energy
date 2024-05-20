document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("myModal");
    let closeAdvBtn = document.getElementById("closeAdvBtn");
    let advertismentTimer = document.getElementById("advertismentTimer");
    
    setTimeout(function() {
        modal.style.display = "block";
        startTimer();
    }, 10000);
    
    closeAdvBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    let image = "./img/sale.png";
    let img = document.createElement("img");
    img.classList.add("img-adv");
    img.src = image;
    img.alt = "img";
    let container = document.getElementById("imageContainer")
    container.appendChild(img); 
    // img.style.display = "none";

    
    function startTimer() {
        let remainTime = 5; 
    
        let intervalId = setInterval(function () {
            
            // img.style.display = "block";
            advertismentTimer.innerHTML = "Ad closes in " + remainTime + " seconds.";

            if (remainTime <= 0) {
                clearInterval(intervalId); 
                advertismentTimer.innerHTML = "Ad closed.";
                closeAdvBtn.style.display = "block";
            }
    
            remainTime--;
        }, 1000); 
    } 
  });
