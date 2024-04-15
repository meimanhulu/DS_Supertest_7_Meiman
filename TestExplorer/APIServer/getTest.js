const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function getMethod(id) {
  console.log("id to GET:", id);
  const response = await request(url)
  .get(`/objects/${id}`);

  //Assertation / Verification
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("vivobook_ASUSLaptop X409DAP_P1410CDA");
  expect(response.body.data.year).to.equal(2022);
  expect(response.body.data.price).to.equal(4200);
  expect(response.body.data.CPU).to.equal("AMD Ryzen 3");
  expect(response.body.data.Hard).to.equal("256 GB");
  expect(response.body.data.color).to.equal("black");
  console.log("body after GET:", response.body);
}

module.exports = { getMethod };