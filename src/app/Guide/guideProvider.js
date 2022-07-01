const { pool } = require("../../../config/database");

const guideDao = require("./guideDao");
// Provider: Read 비즈니스 로직 처리
exports.getGuideByName = async function (trashName) {
  const connection = await pool.getConnection(async (conn) => conn);
  const itemGuideResult = await guideDao.selectItemName(connection, trashName);
  connection.release();

  return itemGuideResult;
};
exports.getGuideByBarcode = async function (barcode) {
  const connection = await pool.getConnection(async (conn) => conn);
  const itemGuideResult = await guideDao.selectItemBarcode(connection, barcode);
  connection.release();
  return itemGuideResult;
};
