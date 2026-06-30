function normalizeEmails(emails = []) {

    return [...new Set(

        emails
            .map(email => email.trim().toLowerCase())
            .filter(Boolean)

    )];

}

module.exports = normalizeEmails;