const fs = require("fs");

function writeOutput(candidate) {

    fs.writeFileSync(

        "./output/candidate.json",

        JSON.stringify(candidate, null, 2)

    );

    console.log("candidate.json generated successfully.");

}

module.exports = writeOutput;