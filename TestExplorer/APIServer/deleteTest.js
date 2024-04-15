const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function deleteMethod(id) {
  const response = await request(url)
    .delete(`/objects/${id}`)
    expect(response.body.message).to.equal(
      `Object with id = ${id} has been deleted.`
    )
    console.log(response.body.message)
}
module.exports = { deleteMethod };