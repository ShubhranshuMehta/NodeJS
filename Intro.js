// V8 -> NodeJS APIs(like fs(file system), http, path, crypto, etc) -> NodeJS Bindings(used to implement APIS written in lower level langauges) -> libuv(actual implementation of core functionality like working with files etc)
// Main components on NodeJS are V8 and libuv(written in c language)


// see delete/race for example on asynchronus

// blocking dunctions - functions that are synchronus like JSON.stringify({'food':'love'})
// non - blocking function - fucntions that are asynchronus like setTimeout(()=>{console.log("poop")},1000) or makeRequest('https://google.com')

// javascript is  a synchronous language which lets us run asynchronous tasks in environments such as NodeJS or Browsers

// multi-threading, processes and threads

// javascript is a single-threaded programminf language

// Synchronous -> Call Stack. ->(if asynchronous) Web APIS
//                          /\                        |
//                          |                         \/
//               (when stack is empty)    <-     Callback Queue


