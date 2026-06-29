const { v4: uuidv4 } = require("uuid");

/**
 * Creates a new empty candidate object.
 * Every parser (CSV, Resume, GitHub, etc.)
 * will populate this structure.
 */
function createCandidate() {
    return {
        candidate_id: uuidv4(),

        full_name: null,

        emails: [],

        phones: [],

        location: {
            city: null,
            state: null,
            country: null
        },

        headline: null,

        skills: [],

        experience: [],

        education: [],

        links: {
            linkedin: null,
            github: null,
            portfolio: null
        },

        provenance: [],

        overall_confidence: 0
    };
}

module.exports = createCandidate;