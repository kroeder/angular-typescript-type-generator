import { Project } from 'ts-morph';
import { getProperties } from './get-properties';

export const collectTypes = (tsConfigPath: string) => {
  const project = new Project({
    tsConfigFilePath: tsConfigPath
  });
  const sourceFiles = project.getSourceFiles();
  return sourceFiles
    .filter((sourceFile) => sourceFile.getClasses().length > 0)
    .map((sourceFile) =>
      sourceFile
        .getClasses()
        .filter(
          (classDeclaration) =>
            !!(
              classDeclaration.getDecorator('Component') ||
              classDeclaration.getDecorator('Directive')
            )
        )
        .map((classDeclaration) => getProperties(classDeclaration))
    );
};

// demo
const types = collectTypes("tsconfig.app.json");
console.log(JSON.stringify(types, null, 4));
