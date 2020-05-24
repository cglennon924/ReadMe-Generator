const fs = require("fs");

const axios= require("axios");

const inquirer= require("inquirer");

const prompt= [
{
    type:"input",
    name:"name",
    message:"What is you username?"

},

{
    type:"input",
    name:"title",
    message:"What is the title of your project?"

},

{   type:"input",
    name:"reason",
    message:"What's the reasoning for this project?"
    
},

{
    type:"input",
    name:"lesson",
    message:"What did you learn from this project? Give some examples please."
},

{
    
    type: "list",
    name: "license",
    message: "What licenses are you using?",
    choices: ["MIT","GPL 3.0", "BSD 3", "None"],
},
    
{
    type: "list",
    name: "node",
    message: "Does this project require node.js to install?",
    choices: ["Yes", "No"],
    default: "Yes"
},
   
{
    type: "list",
    name: "install",
    choices: ["npm", "yarn"],
    message: "If 'Yes', How would someone install your application?",
    default: "npm"
},

{   type: "input", 
    name: "factors",
    message: "Did anyone help with this project?[if none press enter to skip]",
    default: "None"
},

{
    type: "list",
    name: "requirements",
    message: "Does this project require Axios, Inquire and/or other JSON package to run?",
    choices: ["Yes","No"]
}]


//Function 1: Inquirer
inquirer.prompt(prompt) 
    .then((repsonse) =>{
        console.log(response);
        let practice=""
        let requirements=""
        let stlye=""

    if(response.node==="yes" && response.requirements==="yes"){
        requirements = `* In your terminal please install package.JSON by entering 'npm init' and completing the prompts in your terminal.`;
        practice = `* Then install Inquirer, Axios and/or other using '${response.install}`;
        stlye = `* Type node.js to run the file`;
        } else {
        alert("Please start over")
        }  

//Call to retrieve Github info
        axios.get(`https://api.github.com/uers/${response.name}`)
        .then(api => {
            console.log(api.data)
        // Github Username
        const username = data.data.login
        // Github ProfilePic URL
        const profilePic = data.data.avatar_url
        //Github Email Address
        const email = data.data.email
            
            
        
        let createReadMe = 
`# Build ReadMe Here 
 ## Username: ${response.name}
 ## title: ${response.title}
 ## reason: ${response.reason}
 ## lesson: ${response.lesson}
 ## license: ${response.license}
 ## node: ${response.node}
 ## install: ${response.install}
 ## factors: ${response.factors}
 ## requirements: ${response.requirements}
 ## License
![license image](https://img.shields.io/badge/License-${response.license}-brightgreen)
## Profile Pic
![profile image](${profilePic})
### What is my email address?
${email}`           


            fs.writeFile("newReadMe.md", createReadMe, function(err){
                if (err) {
                    return err
                } else {
                    console.log("congrats")
                }

            })


        })

    })
    
