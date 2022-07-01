async function selectItemBarcode(connection, trashBarcode) {
  const selectItemBarcodeQuery = `
                  SELECT id, guide_type, guide_content  
                  FROM item 
                  WHERE barcode = ?;
                  `;
  const itemGuideRow = await connection.query(
    selectItemBarcodeQuery,
    +trashBarcode
  );
  console.log(itemGuideRow[0]);
  return itemGuideRow[0];
}

module.exports = {
  selectItemBarcode,
};
