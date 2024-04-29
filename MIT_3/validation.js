
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim().length < 4) {
        alert("Username should contain atleast 4 characters ");
        return false;
    }
    if (password.trim().length < 6 || password.trim().length > 16) {
        alert("Password should contain minimum 6 and maximum 16 characters ");
        return false;
    }
    if (password.trim().toUpperCase < 1) {
        alert("Password should contain atleast 1 uppercase");
        return false;
    }
    if (password.trim().toLowerCase < 1) {
        alert("Password should contain atleast 1 lowercase");
        return false;
    }
    if (password.trim().includes() === username.trim().includes()) {
        alert("Password and username should not same");
        return false;
    }
    if (password.trim().includes(number) < 1) {
        alert("Password should contain atleast 1 number");
        return false;
    }
    if (password.trim().includes($) < 1) {
        alert("Password should contain atleast 1 special character");
        return false;
    }

    

    
    alert("Free trail has been claimed successfully!");
    return true;
}
