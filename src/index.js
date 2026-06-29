const parseResume = require("./parsers/resumeParser");
const extractResume = require("./extractors/resumeExtractor");

async function main() {

    const resumeText = await parseResume("./input/resume.pdf");

    extractResume(resumeText);

}

main();