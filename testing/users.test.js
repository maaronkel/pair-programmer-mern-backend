const request = require("supertest");
const app = require("../index.js");
const mongoose = require("mongoose");

beforeEach(() => {
    dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(
        "mongodb+srv://admin:admin@cluster0.yd6ia.mongodb.net/pairprogrammer?retryWrites=true&w=majority",
        dbOptions,
        err => {
            if (err) {
                console.log(err);
            } else {
            }
        }
    );
});

afterEach(() => {
    mongoose.connection.close();
});

// @route:      /api/users/login
// @desc: Test of login function. Ensure that a user can login through the backend API.
test("login test", async () => {
    const response = await request(app)
        .post('/api/users/login')
        .send({
            email: "test@email.com",
            password: "asd"
        });
});

// @route:      /api/users/register
// @desc:       Registration test: Testing that a user can register through the backend API.
test("registration test", async () => {
    const response = await request(app)
        .post("/api/users/register")
        .send({
            firstname: "Richard",
            lastname: "Head",
            email: "testd@email.com",
            password: "password12345",
            institutename: "Coder Academy",
            institutelocation: "Melbourne"
        })
    .expect(200);
    expect(response.text).toBeTruthy()
    const result = JSON.parse(response.text)
    expect(result.isTeacher).toBe(true)
});

