const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function patchMethod(id) {
  const response = await request(url)
    .patch(`objects/${id}`)
    .send({
      "name" : "vivobook_ASUSLaptop X409DAP_P1410CDA" //change name
    })
  // Assertion based on the response
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("vivobook_ASUSLaptop X409DAP_P1410CDA");
  console.log("body after PATCH:", response.body);
}

module.exports = { patchMethod };