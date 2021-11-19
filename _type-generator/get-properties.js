"use strict";
exports.__esModule = true;
exports.getProperties = void 0;
var getProperties = function (classDeclaration) {
    var _a;
    var properties = classDeclaration.getProperties();
    var inputs = [];
    var outputs = [];
    var propertiesWithoutDecorators = [];
    // eslint-disable-next-line no-restricted-syntax
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var property = properties_1[_i];
        var prop = {
            name: property.getName(),
            defaultValue: (_a = property.getInitializer()) === null || _a === void 0 ? void 0 : _a.getText(),
            description: property.getJsDocs().map(function (doc) { return doc.getComment(); })
        };
        if (property.getDecorator('Input')) {
            inputs.push(prop);
        }
        else if (property.getDecorator('Output')) {
            outputs.push(prop);
        }
        else {
            propertiesWithoutDecorators.push(prop);
        }
    }
    return { inputs: inputs, outputs: outputs, propertiesWithoutDecorators: propertiesWithoutDecorators };
};
exports.getProperties = getProperties;
