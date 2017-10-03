// setTimeout(function(){
//     console.log("500 ms passed!")
// }, 500)

setTimeout(callback("Katja"), 1000)

// function callback(){
//     console.log("1 sec passed!")
// }

function callback(name){
    console.log("Hello "+name)
}