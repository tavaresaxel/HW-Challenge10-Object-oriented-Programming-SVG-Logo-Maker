const Square = require("../lib/square")
const square = new Square("AXT","black","red")

describe("square", ()=>{
    describe("properties", ()=>{
        it("test text, test textColor and test shapeColor", ()=>{
            expect(square.text).toEqual("AXT")
            expect(square.textColor).toEqual("black")
            expect(square.shapeColor).toEqual("red")
        })
    })

    describe("method", ()=>{
        it("test render", ()=>{
            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="30" height="30" fill="red" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">AXT</text></svg>`)
        })
    })
})