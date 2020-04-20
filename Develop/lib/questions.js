const teamQuestions = {
    // start: {
    //     type: 'confirm',
    //     name: 'confirm',
    //     message: 'Build your team! Teams have a manager + any number of engineers/interns.'
    // },

    newMember: {
        type: 'confirm',
        name: 'confirmed',
        message: 'Add another team member?'
    },

    chooseRole: {
        type: 'list',
        choices: ['Engineer', 'Intern'],
        name: 'role',
        message: 'Choose a role:'
    },

    managerInfo: [
        {
            type: 'input',
            message: 'Enter manager name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter manager id:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter manager email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter manager office number:',
            name: 'officeNumber'
        }
    ],

    engineerInfo: [
        {
            type: 'input',
            message: 'Enter engineer name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter engineer id:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter engineer email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter engineer github:',
            name: 'github'
        }
    ],
    
    internInfo: [
        {
            type: 'input',
            message: 'Enter intern name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter intern id:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter intern email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter intern school:',
            name: 'school'
        }
    ]
};



module.exports = teamQuestions