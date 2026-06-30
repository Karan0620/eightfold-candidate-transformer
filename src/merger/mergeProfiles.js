const createCandidate = require("../models/candidateModel");

const mergePrimitive = require("./mergePrimitive");
const mergeArrays = require("./mergeArrays");

function mergeProfiles(csvCandidate, resumeCandidate) {

    const candidate = createCandidate();

    // Primitive fields
    candidate.full_name = mergePrimitive(
        resumeCandidate.full_name,
        csvCandidate.full_name
    );

    candidate.headline = mergePrimitive(
        resumeCandidate.headline,
        csvCandidate.headline
    );

    // Arrays
    candidate.emails = mergeArrays(
        resumeCandidate.emails,
        csvCandidate.emails
    );

    candidate.phones = mergeArrays(
        resumeCandidate.phones,
        csvCandidate.phones
    );

    candidate.skills = mergeArrays(
        resumeCandidate.skills,
        csvCandidate.skills
    );

    candidate.experience = mergeArrays(
        resumeCandidate.experience,
        csvCandidate.experience
    );

    candidate.education = mergeArrays(
        resumeCandidate.education,
        csvCandidate.education
    );

    // Objects (Resume preferred, fallback to CSV)
    candidate.location = {
        city:
            resumeCandidate.location.city ||
            csvCandidate.location.city,

        state:
            resumeCandidate.location.state ||
            csvCandidate.location.state,

        country:
            resumeCandidate.location.country ||
            csvCandidate.location.country
    };

    candidate.links = {
        linkedin:
            resumeCandidate.links.linkedin ||
            csvCandidate.links.linkedin,

        github:
            resumeCandidate.links.github ||
            csvCandidate.links.github,

        portfolio:
            resumeCandidate.links.portfolio ||
            csvCandidate.links.portfolio
    };

    // -----------------------------
    // Provenance
    // -----------------------------
    candidate.provenance = {

        full_name: [],

        emails: [],

        phones: [],

        skills: [],

        experience: [],

        education: [],

        headline: [],

        location: [],

        links: []

    };

    // Full Name
    if (resumeCandidate.full_name)
        candidate.provenance.full_name.push("resume");

    if (csvCandidate.full_name)
        candidate.provenance.full_name.push("csv");

    // Emails
    if (resumeCandidate.emails.length)
        candidate.provenance.emails.push("resume");

    if (csvCandidate.emails.length)
        candidate.provenance.emails.push("csv");

    // Phones
    if (resumeCandidate.phones.length)
        candidate.provenance.phones.push("resume");

    if (csvCandidate.phones.length)
        candidate.provenance.phones.push("csv");

    // Skills
    if (resumeCandidate.skills.length)
        candidate.provenance.skills.push("resume");

    if (csvCandidate.skills.length)
        candidate.provenance.skills.push("csv");

    // Experience
    if (resumeCandidate.experience.length)
        candidate.provenance.experience.push("resume");

    if (csvCandidate.experience.length)
        candidate.provenance.experience.push("csv");

    // Education
    if (resumeCandidate.education.length)
        candidate.provenance.education.push("resume");

    if (csvCandidate.education.length)
        candidate.provenance.education.push("csv");

    // Headline
    if (resumeCandidate.headline)
        candidate.provenance.headline.push("resume");

    if (csvCandidate.headline)
        candidate.provenance.headline.push("csv");

    // Location
    if (
        resumeCandidate.location.city ||
        resumeCandidate.location.state ||
        resumeCandidate.location.country
    ) {
        candidate.provenance.location.push("resume");
    }

    if (
        csvCandidate.location.city ||
        csvCandidate.location.state ||
        csvCandidate.location.country
    ) {
        candidate.provenance.location.push("csv");
    }

    // Links
    if (
        resumeCandidate.links.linkedin ||
        resumeCandidate.links.github ||
        resumeCandidate.links.portfolio
    ) {
        candidate.provenance.links.push("resume");
    }

    if (
        csvCandidate.links.linkedin ||
        csvCandidate.links.github ||
        csvCandidate.links.portfolio
    ) {
        candidate.provenance.links.push("csv");
    }

    return candidate;
}

module.exports = mergeProfiles;