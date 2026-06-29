const fs = require("fs");
const pdfParse = require("pdf-parse");

async function parseResume(filePath) {
    try {
        const buffer = fs.readFileSync(filePath);
        const data = await pdfParse(buffer);

        return data.text;
    } catch (error) {
        console.error("Error reading resume:", error.message);
        throw error;
    }
}

module.exports = parseResume;