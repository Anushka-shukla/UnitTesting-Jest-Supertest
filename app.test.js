// testing an endpoint that creates user name and paswd
// node --experimental-vm-modules node_modules/jest/bin/jest.js

import request from 'supertest';
import app from './app.js';

describe("POST /users", () => {

    describe("given a username and password", () => {
        // server should save the username and password to the db
        // should respond with a json object containing the user id


        // ---------- test for when things go right ------
        // server should respond with a 200 status code


        test("should respond with a status code 200", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })

        // should specify json in the content headers
        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        // should send a userId
        test("response has userId", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.body.userId).toBeDefined()

        })
    })

    // ---------- test for when things go wrong ------

    describe("when the username and password is missing", () => {
        // if the client fails to respond with a status code of 400
        test("should respond with a status code of 400", async () => {

            // lets say we are not entering password but only giving username

            // made an array when there is username only, password only and when there is none
            const bodyData = [
                { username: "username" },
                { password: "password" },
                {}
            ]
            // sending each data individually in a way that each time any of these or both of these are missing give status code of 400
            for (const body of bodyData) {
                const response = await request(app).post("/users").send(body)
                expect(response.statusCode).toBe(400)
            }
        })
    })

})
