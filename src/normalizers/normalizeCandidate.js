const normalizeEmails = require("./emailNormalizer");
const normalizePhones = require("./phoneNormalizer");
const normalizeSkills = require("./skillNormalizer");

function normalizeCandidate(candidate) {

    candidate.emails = normalizeEmails(candidate.emails);

    candidate.phones = normalizePhones(candidate.phones);

    candidate.skills = normalizeSkills(candidate.skills);

    return candidate;
}

module.exports = normalizeCandidate;