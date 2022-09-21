const axios = require('axios');

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err)
    })
    .then(() => {
        console.log("all done")
    });

// axios always returns a promise so we can use the .then function 

// the .catch is used to catch errors while receiving the response

// the last .then occurs after whole of the promise runs and the error if any is caught

