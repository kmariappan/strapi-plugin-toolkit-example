const fs = require("fs");
const { generateTypes } = require("@kmariappan/strapi-type-generator");
const copy = require("recursive-copy");

const tempDir = "./.tmp/type-generator-template";

const prepareTemplatefiles = () => {
  copy(
    "./node_modules/@kmariappan/strapi-type-generator/templates/server",
    tempDir,
    (error, results) => {
      if (error) {
        console.error("Copy failed: " + error);
      } else {
        console.info("Copied " + results.length + " files");
      }
    }
  );
};

prepareTemplatefiles();

generateTypes({
  generateEntityClass: true,
  path: `${tempDir}/lib`,
}).then((res) => {
  if (res) {
    setTimeout(() => {
      process.exit();
    }, 1500);
  }
});
