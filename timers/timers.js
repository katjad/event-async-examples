
setTimeout(callback("Katja"), 5000)

/*
Setting the Timeout like above, the callback will be called immediately, not just after 5 seconds. 
But we can rewrite the function below so that it still works and the name is logged out
after the interval. How?
(callback is not really a good name for the function in this case! Rather callback-maker?)
*/

function callback(name){   
  console.log("Hello "+name)
}
