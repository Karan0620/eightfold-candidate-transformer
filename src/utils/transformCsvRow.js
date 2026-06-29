const createCandidate = require("../models/candidateModel");

function transformCsvRow(row) {

    const candidate = createCandidate();

    candidate.full_name = row.Name?.trim() || null;

    if (row.Email) {
        candidate.emails.push(row.Email.trim());
    }

    if (row.Phone) {
        candidate.phones.push(row.Phone.trim());
    }

    if (row.Skills) {
        candidate.skills = row.Skills
            .split(";")
            .map(skill => skill.trim())
            .filter(Boolean);
    }

    return candidate;
}

module.exports = transformCsvRow;