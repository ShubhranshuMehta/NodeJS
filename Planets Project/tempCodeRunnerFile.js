fs.createReadStream('kepler_data.csv')
//     .pipe(parse({
//         comments: "#",
//         columns: true,
//     }))
//     .on('data', (data) => {
//         if (isHabitablePlanet) {
//             results.push(data)
//         }
//     }).on('error', (err) => {
//         console.log(err)
//     }).on('end', () => {
//         console.log(results.length)
//     })
