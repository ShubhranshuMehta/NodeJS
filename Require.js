const http = require('http')
// or we can destructure as const {request} = require('http')

const req = http.request('http://www.google.com', (res) => { //on the response, we check if the response is data or an error, in case of data we perform our task.
    // we cant use https in url with http module as the protocol will be wrong
    res.on('data', (chunk) => {
        console.log(`data chunk: ${chunk}`)
    })
    res.on('end', () => {
        console.log('no more data')
    })
})

req.end()