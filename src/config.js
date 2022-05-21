"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const lConfig = require("../config/layers.json")
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Your project description";
const baseUri = "ipfs://NewUriToReplace";

const layerConfigurations = [
  lConfig
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1500,
  height: 500,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

//Preview option not compatible with sprite sheet
// const preview = {
//   thumbPerRow: 5,
//   thumbWidth: 50,
//   imageRatio: format.width / format.height,
//   imageName: "preview.png",
// };

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  //preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
