const { parsePhoneNumberFromString } = require("libphonenumber-js");

function normalizePhones(phones = []) {

    const normalized = [];

    phones.forEach(phone => {

        const phoneNumber = parsePhoneNumberFromString(phone, "IN");

        if (phoneNumber && phoneNumber.isValid()) {
            normalized.push(phoneNumber.number);
        }

    });

    return [...new Set(normalized)];

}

module.exports = normalizePhones;