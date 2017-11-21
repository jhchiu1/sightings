// Message box appears asking user if they are sure they want to delete bird

var deleteButtons = document.getElementsByClassName("delete_button");

for (var x=0; x < deleteButtons.length; x++) {
    deleteButtons[x].addEventListener("click", function(event) {
        var sure = confirm("Are you sure you want to delete this?");
        if (!sure) {
            event.preventDefault();
        }
    });
}

delete_button.addEventListener("click", function(event){
    var sure = confirm("Are you sure?");
    if (!sure) {
        event.preventDefault();   // Button not clicked so no request sent to the server
    }
});


// Get modal
var modal = document.getElementById('myModal');

// Get button opening modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes modal
var span = document.getElementsByClassName("close")[0];

// Modal opens when user clicks on button
btn.onclick = function() {
    modal.style.display = "block";
};

// Modal closes when user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
};

// Modal closes when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};