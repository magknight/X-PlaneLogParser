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

function after_forloop() {
    // task you want to do after for loop finishes it's execution
}

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
lineReader.on("close", function () {
    output.on('error', function (err) { /* error handling */ });
    outputTable.forEach(function (v) { output.write(v + '\n'); });
    output.end();
    console.log("Done")
}
)


