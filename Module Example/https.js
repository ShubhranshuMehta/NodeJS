const request = require('./request.js')
const response = require('./response.js')

function makeRequest(url, data) {
    request.send(url, data)
    return response.read()
}

console.log(makeRequest('https://www.google.com'), 'data')