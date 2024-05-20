// password
function validate_password() {
    let pass = document.getElementById('pass').value;
    let confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
            = '☒ Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Password Matched';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}
 
function wrong_pass_alert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}

// scroll up
const scrollToTopButton = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (window.innerHeight * 2) / 3) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// function clearFormFields() {
//     const fieldName = form.querySelector('input[type="text"]');
//     const fieldLastName = form.querySelector('input[type="text"]');
//     const fieldPass = form.querySelector('input[type="password"]');
//     const fieldPass2 = form.querySelector('input[type="password"]');
//     const fieldEmail = form.querySelector('input[type="email"]');

//     fieldName.value = '';
//     fieldLastName.value = '';
//     fieldPass.value = '';
//     fieldPass2.value = '';
//     fieldEmail.value = '';
// }
