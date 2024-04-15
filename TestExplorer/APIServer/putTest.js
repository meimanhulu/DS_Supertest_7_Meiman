const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable


async function putMethod(id) {
  console.log("id to PUT:", id);
  const response = await request(url)
    .put(`/objects/${id}`)
    .send({
      name: "vivobook_ASUSLaptop X409DAP_P1410CDA",
      data: {
        year: 2022,
        price: 4200,
        CPU: "AMD Ryzen 3",
        Hard: "256 GB",
        color:"black"
        },
      })
      //Expectation get result = 200 and body is equal
      expect(response.status).to.equal(200); 
      expect(response.body.data.color).to.equal("black");
      expect(response.body.name).to.equal("vivobook_ASUSLaptop X409DAP_P1410CDA");
      //console.log(response.body)
      console.log("body after PUT:", response.body);
}

module.exports = { putMethod };