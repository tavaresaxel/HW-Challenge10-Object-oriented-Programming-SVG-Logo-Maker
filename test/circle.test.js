const Circle = require("../lib/circle")
const circle = new Circle("AXT","black","red")

describe("circle", ()=>{
    describe("properties", ()=>{
        it("test text, test textColor and test shapeColor", ()=>{
            expect(circle.text).toEqual("AXT")
            expect(circle.textColor).toEqual("black")
            expect(circle.shapeColor).toEqual("red")
        })
    })

    describe("method", ()=>{
        it("test render", ()=>{
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">AXT</text></svg>`)
        })
    })
})