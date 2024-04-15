//const { postMethod, putMethod, getMethod, patchMethod, deleteMethod, postPayloadMethod } = require("../APIServer/APIObjects");
const { deleteMethod } = require("../APIServer/deleteTest");
const { getMethod } = require("../APIServer/getTest");
const { patchMethod } = require("../APIServer/patchTest");
const { postPayloadMethod } = require("../APIServer/postpayloadTest");
const { postMethod } = require("../APIServer/postTest");
const { putMethod } = require("../APIServer/putTest");



//Test Suites

// Test Case POST using payload method
describe("Testing API restful", function () {
let id;

  it("Test POST from Function", async function () {
    id = await postPayloadMethod();
  });

  // Test case POST
  it("Test POST from Function", async function () {
     id = await postMethod();
  });

  // Test case PUT
  it("Test PUT from Function", async function () {
    await putMethod(id);
  });
  
  // Test case GET
  it("Test GET from Function", async function () {
    await getMethod(id);
  });

  // Test case PATCH
  it("Test PATCH from Function", async function () {
    await patchMethod(id);
  });

  // Test case DELETE
  it("Test DELETE from Function", async function () {
    await deleteMethod(id);
  });

});