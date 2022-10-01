const swup = new Swup();

// change button icon and text on sydney.html page

    console.log('success');
    function changeicon(e){
        let txt = e.innerText;
        e.innerText = txt == 'Hide Schedule' ? 'View Schedule' : 'Hide Schedule';
        document.getElementById("toggleIcon").classList.toggle("bi-dash-lg");
        document.getElementById("toggleIcon2").classList.toggle("bi-dash-lg");

    }

//  SMTP settings

function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "andrew.higgins1889@gmail.com",
        Password : "17E82FED8477336FF381BEDF15015CD23B6E",
        To : 'andrew.higgins2@hotmail.com',
        From : document.getElementById("user-email").value,
        Subject : "New Contact Us Enquiry",
        Body : "Name: " + document.getElementById("user-name").value 
        + "<br> Email: " + document.getElementById("user-email").value 
        + "<br> Date of Birth: " + document.getElementById("dob").value 
        + "<br> Message: " + document.getElementById("main-message").value 
    }).then(
      message => alert(message)
    );
}

// display remaining characters on message field on contact us page

(function(){

    document.addEventListener("keyup", function(event){
        if(event.target.matches(".count-chars")){
            // get input value and length
            const value = event.target.value;
            const valuelength = event.target.value.length;
           // get data values
            const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
            const remainingChars = maxChars - valuelength;
            event.target.nextElementSibling.innerHTML = remainingChars + " Characters left";
        }
    })

})();
