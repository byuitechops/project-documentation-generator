# project-documentation-generator
This is a node cli tool that collects information about a project from the user and then generates associated documents

## Getting Started:
1. Install the repository globally:\
```> npm i -g git+https://github.com/byuitechops/project-documentation-generator.git```

2. Navigate to the repository you want to make documentation for:\
```> cd ./path/to/thing```

3. Run makeRepoDocs.cmd:\
```> makeRepoDocs.cmd```

6. Commit and Push the new files to github\
```> git commit -a -m "Added project-documentation through generator"```

Please note that this program requires two things. 1. That you are running it within an existing git repository. 2. That the repository you are in has an existing `package.json` file. If you dont have an existing package.json, run `> npm init` and follow the instructions.

If you wish to uninstall makeRepoDocs.cmd, simply type:\
```> npm uninstall -g git+https://github.com/byuitechops/project-documentation-generator.git```\
