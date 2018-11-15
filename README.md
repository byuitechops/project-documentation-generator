# project-documentation-generator
This is a node cli tool that collects information about a project from the user and then generates associated documents

## Getting Started:
1. Download or Clone the Repository, then step into it:\
```> git clone https://github.com/byuitechops/project-documentation-generator.git```\
```> cd ./project-documentation-generator```

2. Download Dependencies:\
```> npm install```

3. Link Global NPM Command:\
```> npm link```

4. Navigate to the repo you want to make documentation for:\
```> cd C:\...\repoName```

5. Run the linked command generated in step 3:\
```> makeRepoDocs.cmd```

6. Commit and Push the new files to github\
```> git commit -a -m "Added project-documentation through generator"```

If you wish to uninstall makeRepoDocs.cmd, navigate to the project-documentation-generator folder you cloned in step 1, then simply type:\
```> npm unlink```\
\
Copy and Paste this into powershell to do steps 1-3 automatically:
```
git clone https://github.com/byuitechops/project-documentation-generator.git
cd ./project-documentation-generator
npm install
npm link
cd ..
echo set-up completed
```
