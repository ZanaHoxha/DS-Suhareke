var nameInput = document.getElementById('name');
var errorMessage = document.getElementById('error');
var form = document.getElementById('nameForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = nameInput.value;

    if (!/^[a-zA-Z]+$/.test(nameValue)) {
        // Show error if input is not only letters
        errorMessage.style.display = 'inline';
    } else {
        // Hide error and show success
        errorMessage.style.display = 'none';
        alert('Forma u dërgua me sukses');
    }
});