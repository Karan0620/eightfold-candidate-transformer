const config = require("../../config/outputConfig.json");

function projectOutput(candidate) {

    const output = {};

    config.fields.forEach(field => {

        if (candidate[field] !== undefined) {
            output[field] = candidate[field];
        }

    });

    return output;

}

module.exports = projectOutput;