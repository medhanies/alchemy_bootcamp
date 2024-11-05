const removeSecret = require("/Users/medhaniesolomon/programming/alchemy_bootcamp/data_storage/objects/removeSecret.js");
import { assert } from "chai";

describe("removeSecret", () => {
  it("should remove the secret", () => {
    const person = {
      name: "Alice",
      secret: "afraid of the dark",
    };

    removeSecret(person);

    assert.equal(person.name, "Alice");
    assert.equal(person.secret, undefined);
  });
});
