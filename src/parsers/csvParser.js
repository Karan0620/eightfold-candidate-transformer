const fs = require("fs");
const csv = require("csv-parser");

const createCandidate = require("../models/candidateModel");
const transformCsvRow = require("../utils/transformCsvRow");

function parseCSV(filePath) {
    return new Promise((resolve, reject) => {

        const candidates = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => {
                const candidate = transformCsvRow(row);
                candidates.push(candidate);
            })
            .on("end", () => {
                resolve(candidates);
            })
            .on("error", reject);
    });
}

module.exports = parseCSV;