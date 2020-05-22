const fs = require("fs");

const axios= require("axios");

const inquirer= require("inquirer");

const prompt= [
{
    type:"input",
    name:"name",
    message:"What is you username?"

}

]

//Function 1: Inquirer
inquirer.prompt(prompt) 
    .then((repsonse) =>{
        console.log(response);





        axios.get(`https://api.github.com/uers/${response.name}`)
        .then(api => {
            console.log(api.data)

            let createReadMe = 
`# Build ReadMe Here 
 ## Username: ${response.name}
            
            
`

            fs.writeFile("newReadMe.md", createReadMe, function(err){
                if (err) {
                    return err
                } else {
                    console.log("congrats")
                }

            })


        })

    })
    
