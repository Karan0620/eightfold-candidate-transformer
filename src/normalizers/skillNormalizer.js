function normalizeSkills(skills = []) {

    const mapping = {

        "node js": "Node.js",
        "node.js": "Node.js",
        "javascript": "JavaScript",
        "rest api": "REST APIs",
        "rest apis": "REST APIs"

    };

    return [...new Set(

        skills.map(skill => {

            const cleaned = skill.trim();

            const key = cleaned.toLowerCase();

            return mapping[key] || cleaned;

        })

    )];

}

module.exports = normalizeSkills;