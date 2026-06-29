const createCandidate = require("../models/candidateModel");

function extractPersonalInfo(text, candidate) {

    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    // First non-empty line is assumed to be the candidate name
    candidate.full_name = lines[0] || null;

    // Extract Email
    const emailMatch = text.match(
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    );

    if (emailMatch) {
        candidate.emails.push(emailMatch[0]);
    }

    // Extract Phone Number
    const phoneMatch = text.match(
        /(\+91[\s-]?)?[6-9]\d{9}/
    );

    if (phoneMatch) {
        candidate.phones.push(phoneMatch[0]);
    }

}

function extractSkills(text, candidate) {

    const start = text.indexOf("TECHNICAL SKILLS");
    const end = text.indexOf("PROJECTS");

    if (start === -1 || end === -1) {
        return;
    }

    const skillSection = text.substring(start, end);

    const lines = skillSection.split("\n");

    lines.forEach(line => {

        if (line.includes(":")) {

            const parts = line.split(":");

            if (parts.length > 1) {

                const skills = parts[1]
                    .split(",")
                    .map(skill => skill.trim())
                    .filter(Boolean);

                candidate.skills.push(...skills);

            }

        }

    });
}

function extractExperience(text, candidate) {

    const start = text.indexOf("WORK EXPERIENCE");
    const end = text.indexOf("TECHNICAL SKILLS");

    if (start === -1 || end === -1) {
        return;
    }

    const experienceSection = text.substring(start, end);

    const lines = experienceSection
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    // Remove heading
    lines.shift();

    if (lines.length >= 2) {

        const firstLine = lines[0];
        const secondLine = lines[1];

        const [title, company] = firstLine
            .split("|")
            .map(item => item.trim());

        const [duration, location] = secondLine
            .split("|")
            .map(item => item.trim());

        candidate.experience.push({

            title: title || null,

            company: company || null,

            duration: duration || null,

            location: location || null

        });
    }
}

function extractEducation(text, candidate) {

    const start = text.indexOf("EDUCATION");
    const end = text.indexOf("CERTIFICATIONS");

    if (start === -1 || end === -1) {
        return;
    }

    const educationSection = text.substring(start, end);

    const lines = educationSection
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    lines.shift();

    lines.forEach(line => {

        candidate.education.push(line);

    });
}

function extractProjects(text, candidate) {

}

function extractResume(text) {

    const candidate = createCandidate();

    extractPersonalInfo(text, candidate);

    extractSkills(text, candidate);

    extractExperience(text, candidate);

    extractEducation(text, candidate);

    extractProjects(text, candidate);
    console.log(candidate);
    return candidate;

}

module.exports = extractResume;