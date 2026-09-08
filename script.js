let button = document.getElementById("getData");
let result = document.getElementById("result");

button.onclick = function () {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (let i = 0; i < data.length; i++) {
                result.innerHTML += `
                    <p>
                        Name: ${data[i].name}
                        <br>
                        Email: ${data[i].email}
                    </p>
                `;
            }

        })
        .catch(function (error) {
            console.log(error);
        });

};