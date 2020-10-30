function validation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if(name.length < 5){
    alert("Enter valid name");
    }
    if(email.indexOf("@") == -1 || email.length < 6){
    alert("Enter valid email");
    }
    if(subject.length < 5){
    alert("Enter valid subject");
    }
    if(message.length < 5){
    alert("Name valid message");
    }
}