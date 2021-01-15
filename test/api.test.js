const server = require('../routes/users/user.router');
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const expect = require("chai").expect;

/**
 * Test the POST route
 */
describe("POST api/users/create-user", () => {
    it("It should POST a new task", (done) => {
        const user = {
            username: "Test User4",
            email: "test@gmail.com",
            country_id: 1,
            password: "kole, poluchi li",
            first_name: "KOLE",
            last_name: "FAMILY",
            adress: "adress 1"
        };
       let test = chai.request(server)
            .post("/api/users/create-user")
            .send(user);
        expect(test.status).to.eql(201);
       // console.log('test===>', test.events)
            done()
    });

    it("Testing basic api", (done) => {
        const user = {
            completed: false
        };
        const test = chai.request(server)
            .get("/api/users/test1");
            expect(test.status).to.eql(201);
            console.log('test', test)
        done()
    });

});