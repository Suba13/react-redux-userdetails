 //login page jss
function validate(){
var username = document.getElementById("form-username").value;
var password = document.getElementById("form-password").value;

if ( username == "123" && password == "reviewer")
{
window.location.href="reviewer-home-page.html";
return false; // Redirecting to other page.
}

else if ( username == "456" && password == "admin")
{
window.location="admin-home-page.html";
return false; // Redirecting to other page.
}
else if(username!=0 && password!=0)
{
    alert("Please enter the correct credentials");
}	
}