const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const guideProvider = require("./guideProvider");

exports.getGuideByBarcode = async function (req, res) {
  const trashBarcode = req.query.barcode;

  if (!trashBarcode) {
    return res.send(response(baseResponse.GUIDE_NOT_EXISTS));
  }
  const guideByBarcode = await guideProvider.getGuideByBarcode(trashBarcode);
  return res.send(response(baseResponse.SUCCESS, guideByBarcode));
};
