import{ assert } from "chai"  
import { multiply } from "../multiply.js"

describe ("multiply function", function(){
    it("multiply 1 by 1 and return 1", function(){
        assert.equal(multiply(1,1), 1)
    })
})