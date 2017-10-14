var button = document.getElementById("coloured-button")

button.addEventListener("click", callback)

function callback(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    alert("Hello "+name)  
}

/* 
You can also assign the function to a variable and 
pass that to the event listener. 

But, in contrast to the above method, it matters where 
you put it! 

var callback = function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    alert("Hello "+name)
}
*/