const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamQuestions = require('./lib/questions');
const fs = require('fs');
const generateMarkup = require('./templates/markup');

// Will hold each team member object
const team = [];

// Returns some object based on how the user responds to the question(s) passed in
async function ask(question) {
   return await inquirer.prompt(question)
};

// Prompts user to choose 'engineer' or 'intern', returns an object { role: '(user's choice)' }
async function chooseRole() {
    let roleChoice;
    
        try {
            roleChoice = await ask(teamQuestions.chooseRole);
        }
        catch(err) {
            throw(err);
        };
    
    return roleChoice;
};

// Takes chooseRole() output object as argument. Returns new Engineer/Intern object with options based on prompt responses
async function newMember(roleChoice) {
    let teamMember;

    if (roleChoice.role === 'Engineer') {
        try {
            teamMember = new Engineer(await ask(teamQuestions.engineerInfo))
        }
        catch(err) {
            throw(err)
        };
    }
    else {
        try {
            teamMember = new Intern(await ask(teamQuestions.internInfo))
        }
        catch(err) {
            throw(err)
        };
    }

    return teamMember;
};

// Recursive function that takes object with a true/false value { confirmed: (True/False) } as argument. 
// If true, Creates a new team member based on prompt responses and pushes it to the teams array. If false, stops the app.
async function addNewMember(confirm) {
    if (confirm.confirmed) {
        try {
            team.push(await newMember(await chooseRole()));
            await addNewMember(await ask(teamQuestions.newMember));
        }
        catch(err) {
            throw(err)
        }
    }
    else {
        return;
    }
};

// Calls the renderInfo() method for each team member in the team array. Returns a string of all the outputs
function loop(teamData) {
    let markup = ``;
    teamData.forEach( member => { markup += member.renderInfo() } );
    return markup;
};

// Main function that calls addNewMember() and writes the team.html file with the info for each team member
async function buildTeam() {
    try {
        team.push(new Manager(await ask(teamQuestions.managerInfo)));
        await addNewMember(await ask(teamQuestions.newMember));
        fs.writeFile('./output/team.html', generateMarkup(loop(team)), (err) => { 
            if (err) { 
                throw (err) 
            } 
            else { 
                console.log(`Success! Team rendered to ./output/team.html`) 
            } 
        });
    } 
    catch(err) {
        throw(err)
    }
};
buildTeam();
