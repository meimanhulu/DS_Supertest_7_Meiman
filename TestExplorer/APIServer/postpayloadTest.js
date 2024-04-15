const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const path = require("path");
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

//example if use payload method
async function postPayloadMethod() {
  //Load payload from JSON file
  const payloadPath = path.join(__dirname,"..", "payload", "postPayload.json");
  const payload = require(payloadPath);

  const response = await request(url)
  .post("/objects")
  .send(payload)
expect(response.status).to.equal(200);
expect(response.body).to.deep.include(payload);
expect(response.body.createdAt).to.not.be.null;
console.log(response.body)
const id = response.body.id;
console.log("id After POST:", id);
return id; //Return the id

}

module.exports = { postPayloadMethod };