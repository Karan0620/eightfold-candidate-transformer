function mergeArrays(first = [], second = []) {

    return [...new Set([...first, ...second])];

}

module.exports = mergeArrays;