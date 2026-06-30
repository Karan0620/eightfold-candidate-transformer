function calculateConfidence(candidate) {

    let score = 0;

    if (candidate.full_name) score += 15;

    if (candidate.emails.length) score += 15;

    if (candidate.phones.length) score += 10;

    if (candidate.skills.length) score += 25;

    if (candidate.experience.length) score += 20;

    if (candidate.education.length) score += 15;

    candidate.overall_confidence = score / 100;

    return candidate;

}

module.exports = calculateConfidence;