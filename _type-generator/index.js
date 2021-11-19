"use strict";
exports.__esModule = true;
exports.collectTypes = void 0;
var ts_morph_1 = require("ts-morph");
var get_properties_1 = require("./get-properties");
var collectTypes = function (tsConfigPath) {
    var project = new ts_morph_1.Project({
        tsConfigFilePath: tsConfigPath
    });
    var sourceFiles = project.getSourceFiles();
    return sourceFiles
        .filter(function (sourceFile) { return sourceFile.getClasses().length > 0; })
        .map(function (sourceFile) {
        return sourceFile
            .getClasses()
            .filter(function (classDeclaration) {
            return !!(classDeclaration.getDecorator('Component') ||
                classDeclaration.getDecorator('Directive'));
        })
            .map(function (classDeclaration) { return (0, get_properties_1.getProperties)(classDeclaration); });
    });
};
exports.collectTypes = collectTypes;
// demo
var types = (0, exports.collectTypes)("tsconfig.app.json");
console.log(JSON.stringify(types, null, 4));
