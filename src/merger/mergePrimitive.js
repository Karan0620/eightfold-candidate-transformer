/**
 * Merge primitive values like
 * name
 * headline
 *
 * Priority:
 * Resume > CSV
 */

function mergePrimitive(primaryValue, secondaryValue) {

    if (
        primaryValue !== null &&
        primaryValue !== undefined &&
        primaryValue !== ""
    ) {
        return primaryValue;
    }

    return secondaryValue;
}

module.exports = mergePrimitive;