var button = document.getElementById("coloured-button")

button.addEventListener("click", callback)

function callback(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    alert("Hello "+name)
}