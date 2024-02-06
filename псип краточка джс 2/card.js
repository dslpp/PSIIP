// function save() {
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var email = document.getElementById('email').value;
//     var comment = document.getElementById('comment').value;
//     if (!firstName || !lastName || !email || !comment) {
//         alert("Пожалуйста, заполните все обязательные поля.");
//         return;
//     }
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) {
//                 alert("Пожалуйста, введите корректный email.");
//                 return;
//             }

//     var output = "Имя: " + firstName + "<br>" + 
//                  "Фамилия: " + lastName + "<br>" +
//                  "E-mail: " + email + "<br>" +
//                  "Комментарий: " + comment;

//     document.body.innerHTML +=  output;
// }



function save() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Пожалуйста, введите корректный email.");
            return;
        }
    var userData = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'comment': comment
    };
    document.cookie = 'userData=' + JSON.stringify(userData);
    displaySavedData();
}

function displaySavedData() {
    var cookieData = document.cookie
        .split('; ')
        .find(row => row.startsWith('userData='));

    if (cookieData) {
        var userData = JSON.parse(cookieData.split('=')[1]);
        var outputDiv = document.getElementById('output');
        outputDiv.innerHTML = "Имя: " + userData.firstName + "<br>" +
                             "Фамилия: " + userData.lastName + "<br>" +
                             "E-mail: " + userData.email + "<br>" +
                             "Комментарий: " + userData.comment;
    }
}
displaySavedData();