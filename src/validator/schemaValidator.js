const Ajv = require("ajv");
const schema = require("../schema/candidateSchema.json");

const ajv = new Ajv();

const validate = ajv.compile(schema);

function validateCandidate(candidate) {

    const valid = validate(candidate);

    if (!valid) {

        console.log("Validation Errors:");

        console.log(validate.errors);

        return false;

    }

    return true;

}

module.exports = validateCandidate;