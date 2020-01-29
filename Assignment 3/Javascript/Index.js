function validateForm() {

    var h = document.forms["myForm"]["password"].value;
    var i = document.forms["myForm"]["password"].value;

    if (h == "") {
        alert("Password must be filled out");
        return false;
    }

    if (i.search(/[a-z]/) < 0) {
        alert("Your password must contain at least one lowercase letter.")
        return false;
    }
    if (i.search(/[A-Z]/) < 0) {
        alert("Your password must contain at least one uppercase letter.")
        return false;
    }
    if (i.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit.")
        return false;
    }
    if (i.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
        alert("Your password must contain at least one special character.")
        return false;
    }
    if (i.length < 8) {
        alert("Minimum Length of password must be 8");
        return false;
    }
    else {
        alert("Login Successfully");
    }
}