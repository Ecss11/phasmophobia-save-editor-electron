const path = require("path");

function resolveHtmlLocation(filename) {
    return path.resolve('file://', __dirname, '../renderer', filename);
}

module.exports = {
    resolveHtmlLocation
}
