const form = document.getElementById('informationForm');
const colorSelect = document.getElementById('color');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const surname = document.getElementById('surname').value;
    const color = colorSelect.value;
    

    alert (
        "User Information:\n" +
        "Name: " + name + "\n" +
        "Surname: " + surname + "\n" +
        "Email: " + email + "\n" +
        "Favorite Color: " + color 
    );
});


