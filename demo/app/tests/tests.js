var Paint = require("nativescript-paint").Paint;
var paint = new Paint();

describe("greet function", function() {
    it("exists", function() {
        expect(paint.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(paint.greet()).toEqual("Hello, NS");
    });
});