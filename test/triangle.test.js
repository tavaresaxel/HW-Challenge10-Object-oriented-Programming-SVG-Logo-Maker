const Triangle = require("../lib/triangle")
const triangle = new Triangle("AXT","black","red")

describe("triangle", ()=>{
    describe("properties", ()=>{
        it("test text, test textColor and test shapeColor", ()=>{
            expect(triangle.text).toEqual("AXT")
            expect(triangle.textColor).toEqual("black")
            expect(triangle.shapeColor).toEqual("red")
        })
    })

    describe("method", ()=>{
        it("test render", ()=>{
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">AXT</text></svg>`)
        })
    })
})