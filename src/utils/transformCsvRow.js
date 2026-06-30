const createCandidate = require("../models/candidateModel");

function transformCsvRow(row) {

    const candidate = createCandidate();

    // Full Name
    candidate.full_name = row.Name?.trim() || null;

    // Email
    if (row.Email) {
        candidate.emails.push(row.Email.trim());
    }

    // Phone
    if (row.Phone) {
        candidate.phones.push(row.Phone.trim());
    }

    // Skills
    if (row.Skills) {
        candidate.skills = row.Skills
            .split(";")
            .map(skill => skill.trim())
            .filter(Boolean);
    }

    return candidate;
}

module.exports = transformCsvRow;