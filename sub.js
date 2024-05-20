document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function() {
        if (localStorage.getItem("subscribed") != 'true') {
            document.getElementById("nonModalWindow").style.display = "block";
        }
    }, 15000);
    
    document.getElementById("agreeWindowbtn").addEventListener("click", function () {
        localStorage.clear();
        localStorage.setItem('subscribed', "true");
        document.getElementById("nonModalWindow").style.display = "none";
        alert('дякуємо за підписку!');
    });

    document.getElementById("declineWindowBtn").addEventListener("click", function () {
        document.getElementById("nonModalWindow").style.display = "none";
    });

    document.addEventListener('click', function(event) {
        if (event.target.closest('#nonModalWindow') === null) {
            document.getElementById('nonModalWindow').style.display = 'none';
        }
    });
    
});


//<div id="popup">
  //  <p>Підпишіться на наші повідомлення:</p>
    //<button id="accept-btn">Прийняти</button>
   // <button id="reject-btn">Відхилити</button>
// </div>

// document.addEventListener('DOMContentLoaded', function() {

//     setTimeout(function() {
//         if (localStorage.getItem("subscribed") != "true") {
//             document.getElementById('popup').style.display = 'block';
//         }
//     }, 15000);

//     document.getElementById('accept-btn').addEventListener('click', function() {
//         localStorage.clear();
//         localStorage.setItem('subscribed', "true");
//         document.getElementById('popup').style.display = 'none';
//         alert('Дякуємо за приєднання!');
//     });

//     document.getElementById('reject-btn').addEventListener('click', function() {
//         document.getElementById('popup').style.display = 'none';
//     });
// });