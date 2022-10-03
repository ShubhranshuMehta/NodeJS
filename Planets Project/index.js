
// csv parser implements the Node.js stream API

// In node, all streams are implemented using the event emitter.

// CSV parver implements the stream API along with callback and sync API.
// The stream API considers the data as a stream and takes the data in the form of that said stream. It is much more scalable for larger data inputs.
// Callbacks as we have seen , take all the data in one turn . Not much scalable.

// stream API handles data as it comes in, as it's read from our hard drive instead of all the data to be read in order to do anything.

const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

function isHabitablePlanet(planet) {
    return (planet.koi_disposition == 'CONFIRMED' && planet.koi_insol < 1.11 && planet.koi_prad < 1.6)
}

fs.createReadStream('kepler_data.csv')  // we use pipe to connect a readable stream to a writable stream    readable.pipe(writable)
    .pipe(parse({   // parse is function which returns an event emitter
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data))
            results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(`${results.length} are habitable`);
        console.log('done');
    })

//  In the result we get buffers, which are just objects that node uses to represent collection of bytes

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comments: "#",
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet) {
            results.push(data)
        }
    }).on('error', (err) => {
        console.log(err)
    }).on('end', () => {
        console.log(results.length)
    })
