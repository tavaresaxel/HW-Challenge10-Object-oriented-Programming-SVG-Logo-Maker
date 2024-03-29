const inquirer = require("inquirer")
const fs = require("fs")
const Circle = require("./lib/circle")
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")


const questions = [
    {
        type:"list",
        message:"choose the following shape:",
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
        message:"Please enter desired color of text: ",
        name:"textColor"
    }
]
inquirer.prompt(questions)
.then(data=>{
    if(data.shape === "circle"){
        const circle = new Circle(data.text, data.textColor, data.shapeColor)
        fs.writeFile("./examples/circle.svg", circle.render(), err => {
            console.log("File circle.svg has been created in the examples folder")
        })
    }
    else if(data.shape === "triangle"){
        const triangle = new Triangle(data.text, data.textColor, data.shapeColor)
        fs.writeFile("./examples/triangle.svg", triangle.render(), err => {
            console.log("File triangle.svg has been created in the examples folder")
        })
    }
    else{
        const square = new Square(data.text, data.textColor, data.shapeColor)
        fs.writeFile("./examples/square.svg", square.render(), err => {
            console.log("File square.svg has been created in the examples folder")
        })
    }
})