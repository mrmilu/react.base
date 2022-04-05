const fs = require("fs");

try {
  const data = fs.readFileSync("./schema.json", "utf8");
  const possibleTypes = {};

  JSON.parse(data).__schema.types.forEach((supertype) => {
    if (supertype.possibleTypes) {
      possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => subtype.name);
    }
  });

  fs.writeFile("./src/core/app/data/services/mock_service_possible_types.json", JSON.stringify(possibleTypes), (err) => {
    if (err) {
      console.error("Error writing possibleTypes.json", err);
    } else {
      console.log("Fragment types successfully extracted!");
    }
  });
} catch (err) {
  console.error(err);
}
