import {expect} from "chai";
import request from "request";

describe("Route API Testing", () =>{
    let url = "http://localhost:8000/api/addInfo";

    it("should return a 200 status", (done) =>{
        
        let body = {
        name: "John Doe",
        movie: "Inception",
        email: "john.doe@example.com"}
    
        request.post(url, {json: body}, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            done()
        });
    });
});