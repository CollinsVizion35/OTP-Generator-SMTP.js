const generateOTP = document.getElementById('submitEmail');
const emailPage = document.querySelector('.email-page');
const otpPage = document.querySelector('.OTPPage');
const inputEmail = document.getElementById('email');
const otpStore = document.getElementById('otpStore');
const buttonOTP = document.getElementById('submitOTP');
const yourOTP = document.getElementById('OTP');
const alertBox = document.getElementById('alert-box');



function sendEmail() {


    var numbers = '0123456789';
    var otp = '';
    for (var i = 0; i < 6; i++) {
        otp += numbers[Math.floor(Math.random() * 10)];
    }
        console.log(otp);
        emailPage.style.display = "none";
        otpPage.style.display = "flex";
    console.log(inputEmail.value);
    otpStore.innerHTML = otp;
    
        
// SMTP trigger
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "YOUR_ELASTIC_EMAIL_EMAIL_ADDRESS",
        // Generate password when you log on to app.elasticemail.com, follow the official documentation
        Password : "YOUR_ELASTIC_EMAIL_PASSWORD",
        // JQuery to take values from email input
        To : `${inputEmail.value}`,
        From : "PREFERRED_EMAIL_FOR_SENDING_MESSAGES",
        Subject : "Your OTP",
        Body : "Your One Time Password is" +" "+ `${otp}` +"." + " " + "Do not share with it with anyone"
    }).then(
      message => alert('OTP successfully sent')
    );

    buttonOTP.addEventListener('click', () => {
        if (yourOTP.value === otpStore.innerHTML) {
            alert('Successful')
            window.location.href = "./success.html"
        } else {
            alertBox.style.display = "block"
            setTimeout(() => {
                alertBox.style.display = "none"
            }, 3000);
        }
    })
}

