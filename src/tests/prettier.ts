export = `
Usage: prettier [options] [file/dir/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

Output options:

  -c, --check              Check if the given files are formatted, print a human-friendly summary
                           message and paths to unformatted files (see also --list-different).
  -l, --list-different     Print the names of files that are different from Prettier's formatting (see also --check).
  -w, --write              Edit files in-place. (Beware!)

Format options:

  --add-trailing-commas    Adds a trailing comma to array literals, hash literals, and method calls.
                           Defaults to false.
  --arrow-parens <always|avoid>
                           Include parentheses around a sole arrow function parameter.
                           Defaults to always.
  --no-bracket-spacing     Do not print spaces between brackets.
  --embedded-language-formatting <auto|off>
                           Control how Prettier formats quoted code embedded in the file.
                           Defaults to auto.
  --end-of-line <lf|crlf|cr|auto>
                           Which end of line characters to apply.
                           Defaults to lf.
  --entrypoint <arrayInitializer|variableInitializerList|block|blockStatements|blockStatement|localVariableDeclarationStatement|localVariableDeclaration|localVariableType|statement|statementWithoutTrailingSubstatement|emptyStatement|labeledStatement|expressionStatement|statementExpression|ifStatement|assertStatement|switchStatement|switchBlock|switchCase|switchLabel|enumConstantName|whileStatement|doStatement|forStatement|basicForStatement|forInit|forUpdate|statementExpressionList|enhancedForStatement|breakStatement|continueStatement|returnStatement|throwStatement|synchronizedStatement|tryStatement|catches|catchClause|catchFormalParameter|catchType|finally|tryWithResourcesStatement|resourceSpecification|resourceList|resource|resourceInit|variableAccess|isBasicForStatement|isLocalVariableDeclaration|classDeclaration|normalClassDeclaration|classModifier|typeParameters|typeParameterList|superclass|superinterfaces|interfaceTypeList|classBody|classBodyDeclaration|classMemberDeclaration|fieldDeclaration|fieldModifier|variableDeclaratorList|variableDeclarator|variableDeclaratorId|variableInitializer|unannType|unannPrimitiveType|unannReferenceType|unannClassOrInterfaceType|unannClassType|unannInterfaceType|unannTypeVariable|methodDeclaration|methodModifier|methodHeader|result|methodDeclarator|receiverParameter|formalParameterList|formalParameter|variableParaRegularParameter|variableArityParameter|variableModifier|throws|exceptionTypeList|exceptionType|methodBody|instanceInitializer|staticInitializer|constructorDeclaration|constructorModifier|constructorDeclarator|simpleTypeName|constructorBody|explicitConstructorInvocation|unqualifiedExplicitConstructorInvocation|qualifiedExplicitConstructorInvocation|enumDeclaration|enumBody|enumConstantList|enumConstant|enumConstantModifier|enumBodyDeclarations|isClassDeclaration|identifyClassBodyDeclarationType|isDims|constantExpression|expression|lambdaExpression|lambdaParameters|lambdaParametersWithBraces|lambdaParameterList|inferredLambdaParameterList|explicitLambdaParameterList|lambdaParameter|regularLambdaParameter|lambdaParameterType|lambdaBody|ternaryExpression|binaryExpression|unaryExpression|unaryExpressionNotPlusMinus|primary|primaryPrefix|primarySuffix|fqnOrRefType|fqnOrRefTypePartRest|fqnOrRefTypePartCommon|fqnOrRefTypePartFirst|parenthesisExpression|castExpression|primitiveCastExpression|referenceTypeCastExpression|newExpression|unqualifiedClassInstanceCreationExpression|classOrInterfaceTypeToInstantiate|typeArgumentsOrDiamond|diamond|methodInvocationSuffix|argumentList|arrayCreationExpression|arrayCreationDefaultInitSuffix|arrayCreationExplicitInitSuffix|dimExprs|dimExpr|classLiteralSuffix|arrayAccessSuffix|methodReferenceSuffix|identifyNewExpressionType|isLambdaExpression|isCastExpression|isPrimitiveCastExpression|isReferenceTypeCastExpression|isRefTypeInMethodRef|interfaceDeclaration|normalInterfaceDeclaration|interfaceModifier|extendsInterfaces|interfaceBody|interfaceMemberDeclaration|constantDeclaration|constantModifier|interfaceMethodDeclaration|interfaceMethodModifier|annotationTypeDeclaration|annotationTypeBody|annotationTypeMemberDeclaration|annotationTypeElementDeclaration|annotationTypeElementModifier|defaultValue|annotation|elementValuePairList|elementValuePair|elementValue|elementValueArrayInitializer|elementValueList|identifyInterfaceBodyDeclarationType|identifyAnnotationBodyDeclarationType|isSimpleElementValueAnnotation|literal|integerLiteral|floatingPointLiteral|booleanLiteral|moduleName|packageName|typeName|expressionName|methodName|packageOrTypeName|ambiguousName|compilationUnit|ordinaryCompilationUnit|modularCompilationUnit|packageDeclaration|packageModifier|importDeclaration|typeDeclaration|moduleDeclaration|moduleDirective|requiresModuleDirective|exportsModuleDirective|opensModuleDirective|usesModuleDirective|providesModuleDirective|requiresModifier|isModuleCompilationUnit|primitiveType|numericType|integralType|floatingPointType|referenceType|classOrInterfaceType|classType|interfaceType|typeVariable|dims|typeParameter|typeParameterModifier|typeBound|additionalBound|typeArguments|typeArgumentList|typeArgument|wildcard|wildcardBounds>
                           Prettify from the entrypoint, allowing to use prettier on snippet.
                           Defaults to compilationUnit.
  --html-whitespace-sensitivity <css|strict|ignore>
                           How to handle whitespaces in HTML.
                           Defaults to css.
  --inline-conditionals    When it fits on one line, allows if and unless statements to use the modifier form.
                           Defaults to true.
  --inline-loops           When it fits on one line, allows while and until statements to use the modifier form.
                           Defaults to true.
  --jsx-bracket-same-line  Put > on the last line instead of at a new line.
                           Defaults to false.
  --jsx-single-quote       Use single quotes in JSX.
                           Defaults to false.
  --parser <flow|babel|babel-flow|babel-ts|typescript|css|less|scss|json|json5|json-stringify|graphql|markdown|mdx|vue|yaml|html|angular|lwc|cs|java|sh|toml|ruby|xml>
                           Which parser to use.
  --prefer-hash-labels     When possible, uses the shortened hash key syntax, as opposed to hash rockets.
                           Defaults to true.
  --prefer-single-quotes   When double quotes are not necessary for interpolation, prefers the use of single quotes for string literals.
                           Defaults to true.
  --print-width <int>      The line length where Prettier will try wrap.
                           Defaults to 80.
  --prose-wrap <always|never|preserve>
                           How to wrap prose.
                           Defaults to preserve.
  --quote-props <as-needed|consistent|preserve>
                           Change when properties in objects are quoted.
                           Defaults to as-needed.
  --no-semi                Do not print semicolons, except at the beginning of lines which may need them.
  --single-quote           Use single quotes instead of double quotes.
                           Defaults to false.
  --tab-width <int>        Number of spaces per indentation level.
                           Defaults to 2.
  --to-proc-transform      When possible, convert blocks to the more concise Symbol#to_proc syntax.
                           Defaults to true.
  --trailing-comma <es5|none|all>
                           Print trailing commas wherever possible when multi-line.
                           Defaults to es5.
  --use-tabs               Indent with tabs instead of spaces.
                           Defaults to false.
  --vue-indent-script-and-style
                           Indent script and style tags in Vue files.
                           Defaults to false.
  --xml-self-closing-space Adds a space before self-closing tags.
                           Defaults to true.
  --xml-whitespace-sensitivity <strict|ignore>
                           How to handle whitespaces in XML.
                           Defaults to strict.

Config options:

  --config <path>          Path to a Prettier configuration file (.prettierrc, package.json, prettier.config.js).
  --no-config              Do not look for a configuration file.
  --config-precedence <cli-override|file-override|prefer-file>
                           Define in which order config files and CLI options should be evaluated.
                           Defaults to cli-override.
  --no-editorconfig        Don't take .editorconfig into account when parsing configuration.
  --find-config-path <path>
                           Find and print the path to a configuration file for the given input file.
  --ignore-path <path>     Path to a file with patterns describing files to ignore.
                           Defaults to .prettierignore.
  --plugin <path>          Add a plugin. Multiple plugins can be passed as separate '--plugin's.
                           Defaults to [].
  --plugin-search-dir <path>
                           Custom directory that contains prettier plugins in node_modules subdirectory.
                           Overrides default behavior when plugins are searched relatively to the location of Prettier.
                           Multiple values are accepted.
                           Defaults to [].
  --with-node-modules      Process files inside 'node_modules' directory.

Editor options:

  --cursor-offset <int>    Print (to stderr) where a cursor at the given position would move to after formatting.
                           This option cannot be used with --range-start and --range-end.
                           Defaults to -1.
  --range-end <int>        Format code ending at a given character offset (exclusive).
                           The range will extend forwards to the end of the selected statement.
                           This option cannot be used with --cursor-offset.
                           Defaults to Infinity.
  --range-start <int>      Format code starting at a given character offset.
                           The range will extend backwards to the start of the first line containing the selected statement.
                           This option cannot be used with --cursor-offset.
                           Defaults to 0.

Other options:

  --no-color               Do not colorize error messages.
  --file-info <path>       Extract the following info (as JSON) for a given file path. Reported fields:
                           * ignored (boolean) - true if file path is filtered by --ignore-path
                           * inferredParser (string | null) - name of parser inferred from file path
  -h, --help <flag>        Show CLI usage, or details about the given flag.
                           Example: --help write
  -u, --ignore-unknown     Ignore unknown files.
  --insert-pragma          Insert @format pragma into file's first docblock comment.
                           Defaults to false.
  --loglevel <silent|error|warn|log|debug>
                           What level of logs to report.
                           Defaults to log.
  --require-pragma         Require either '@prettier' or '@format' to be present in the file's first docblock comment
                           in order for it to be formatted.
                           Defaults to false.
  --stdin-filepath <path>  Path to the file to pretend that stdin comes from.
  --support-info           Print support information as JSON.
  -v, --version            Print Prettier version.


`
