const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamQuestions = require('./lib/questions');
const fs = require('fs');
const generateMarkup = require('./templates/markup');

const team = [];


function ask(question) {
   return inquirer.prompt(question)
};


async function role(choice) {
    let roleInfo;
    
    if (choice.confirm) {
        try {
            roleInfo = await ask(teamQuestions.chooseRole);
        }
        catch(err) {
            throw(err);
        };
    } 
    else {
        return;
    };
    return roleInfo;
};

async function memberData(data) {
    let teamMember;

    if (data === undefined) {
        return;
    }
    else if (data.role === 'Engineer') {
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

async function addNewMember(confirm) {
    if (confirm.confirm) {
        try {
            team.push(await memberData(await role(confirm)));
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

const loop = function(teamData) {
    let markup = ``;
    teamData.forEach( member => { markup = markup + member.renderInfo() } );
    return markup;
};

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
