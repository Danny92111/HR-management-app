# HR Management app - front end

A react site that pulls and updates content from the mock server and renders graphs based on the provided data set

## Application setup

 
1. Install git , Node.js v18.12.1

2. Clone the repository from https://github.com/Danny92111/HR-management-app

3. Execute `npm install` in the root directory.

4. Execute `npm start` to start the app.

   - This will start both the frontend and the mock server locally

### Useful commands

 

In the root directory, you will find package.json which you will find information about the project. In the file we have a few commands which we can execute by opening the terminal in the root directory and running "npm *script_name*" where *script_name* represents the name of the script you want to run. Below we have some information about each script individually:

 

# -> start:frontend

This will start the frontend application on port 3000

# -> start:server

This will start the backend mock server on port 5000

# -> start

This will start both frontend application and the backend mock server on different ports

# -> build

This will create a build that is production ready and optimizes the build for better performance

# -> jest

This will run the unit tests

# -> lint

Runs the linter through the codebase for identifying and reporting on patterns found in the code with the goal of making code more consistent and avoiding bugs.

# -> lint:fix

Similar to the "lint" command but will automatically attempt to fix errors if possible