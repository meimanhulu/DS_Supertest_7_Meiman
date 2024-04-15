const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable


async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "vivobook_ASUSLaptop X409DAP_P1410CDA",
      data: {
         year: 2022,
         price: 4200,
         CPU: "AMD Ryzen 3",
         Hard: "256 GB"
      }
      },
    );

  //Expectation get result = 200 and body is equal
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("vivobook_ASUSLaptop X409DAP_P1410CDA");
  expect(response.body.data.year).to.equal(2022);
  expect(response.body.data.price).to.equal(4200);
  expect(response.body.data.CPU).to.equal("AMD Ryzen 3");
  expect(response.body.data.Hard).to.equal("256 GB");
  expect(response.body.createdAt).to.not.be.null;
  
  //Save ID get from post method body
  console.log(response.body)
  const id = response.body.id;
  console.log("id After POST:", id);
  return id; //Return the id
}


module.exports = { postMethod };