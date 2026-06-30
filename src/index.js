const parseCSV = require("./parsers/csvParser");
const parseResume = require("./parsers/resumeParser");
const extractResume = require("./extractors/resumeExtractor");
const mergeProfiles = require("./merger/mergeProfiles");

const normalizeCandidate = require("./normalizers/normalizeCandidate");
const calculateConfidence = require("./utils/calculateConfidence");

const projectOutput = require("./projector/projectOutput");
const validateCandidate = require("./validator/schemaValidator");
const writeOutput = require("./utils/writeOutput");

async function main() {

    try {

        // CSV
        const csvCandidates = await parseCSV("./input/recruiter.csv");

        if (!csvCandidates.length) {
            throw new Error("No candidates found in recruiter.csv");
        }

        const csvCandidate = csvCandidates[0];

        // Resume
        const resumeText = await parseResume("./input/resume.pdf");
        const resumeCandidate = extractResume(resumeText);

        // Merge
        const mergedCandidate = mergeProfiles(
            csvCandidate,
            resumeCandidate
        );

        // Normalize
        const normalizedCandidate = normalizeCandidate(
            mergedCandidate
        );

        // Confidence
        const confidentCandidate = calculateConfidence(
            normalizedCandidate
        );

        // Runtime Projection
        const projectedCandidate = projectOutput(
            confidentCandidate
        );

        // Schema Validation
        const valid = validateCandidate(projectedCandidate);

        if (!valid) {

            console.log("Validation Failed");
            return;

        }

        // Write Output
        writeOutput(projectedCandidate);

        console.log("\n✅ Candidate transformation completed successfully.\n");
        console.log("========== FINAL OUTPUT ==========");
        console.log(JSON.stringify(projectedCandidate, null, 2));

    } catch (error) {

        console.error("Pipeline failed:", error.message);

    }

}

main();