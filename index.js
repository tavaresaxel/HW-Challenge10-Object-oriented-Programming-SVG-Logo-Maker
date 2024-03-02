const inquirer = require("inquirer")
const fs = require("fs")
const Circle = require("./lib/circle")
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")


const questions = [
    {
        type:"list",
        name:"shape",
        choices:["circle","triangle","square"]
    },
    {
        type:"input",
        message:"Enter 3 letters for logo design: ",
        name:"text"
    },
    {
        type:"input",
        message:"Plese enter desired color for the background of the shape: ",
        name:"shapeColor"
    },
    {
        type:"input",
        message:"Please enter desired color of text",
        name:"textColor"
    }
]
inquirer.prompt(questions)
.then(data=>{
    if(data.shape === "circle"){

    }
    else if(data === "triangle"){
        const triangle
    }
    else{

    }
})