module.exports = function (app) {
  const guide = require("./guideController");

  app.get("/guide/barcode", guide.getGuideByBarcode);
};
