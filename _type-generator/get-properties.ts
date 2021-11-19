import { ClassDeclaration } from 'ts-morph';

export const getProperties = (classDeclaration: ClassDeclaration) => {
  const properties = classDeclaration.getProperties();
  const inputs = [];
  const outputs = [];
  const propertiesWithoutDecorators = [];

  // eslint-disable-next-line no-restricted-syntax

  for (const property of properties) {
    const prop = {
      name: property.getName(),
      defaultValue: property.getInitializer()?.getText(),
      description: property.getJsDocs().map(doc => doc.getComment())
    };
    if (property.getDecorator('Input')) {
      inputs.push(prop);
    } else if (property.getDecorator('Output')) {
      outputs.push(prop);
    } else {
      propertiesWithoutDecorators.push(prop);
    }
  }



  return { inputs, outputs, propertiesWithoutDecorators };
};
