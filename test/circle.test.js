const Circle = require("../lib/circle")
const circle = new Circle("PLL","blue","black")

describe("circle", ()=>{
    describe("properties", ()=>{
        it("test text, test textColor and test shapeColor", ()=>{
            expect(circle.text).toEqual("PLL")
            expect(circle.textColor).toEqual("blue")
            expect(circle.shapeColor).toEqual("black")
        })
    })

    describe("method", ()=>{
        it("test render", ()=>{
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">PLL</text></svg>`)
        })
    })
})