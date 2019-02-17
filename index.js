#!/usr/bin/env node
var fs = require('fs');
const args = process.argv.slice(2)
var path = args['path']
if (path == null) {
    path = "./Log.txt"
}
var output = fs.createWriteStream('formattedLog.txt');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(path)
});
var tableOfIgnores = [
    'XSB:',
    'XSB WARNING: ',
    '            ',
    "Custom Scenery",
    "Found an illegal name",
    "We found a duplicate runway",
    "in sign",
    "Could not find tile ",
    "Resources/default scenery",
    "GroundTraffic:"
]
var outputTable = []

lineReader.on('line', function (line) {

    for (i = 0; i < tableOfIgnores.length; i++) {
        let act = true
        if (line.match(tableOfIgnores[i])) {
            // console.log("invalid line: " + i)
            break
        } else if (line === "") { break }
        if (i === tableOfIgnores.length - 1) {
            outputTable.push(line)
        }
    }
});
lineReader.on('error', function (err) { console.log(err) });
lineReader.on("close", function () {
    output.on('error', function (err) { console.log(err) });
    outputTable.forEach(function (v) { output.write(v + '\n'); });
    output.end();
    console.log("Done")
}
)


