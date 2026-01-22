// const cds = require('@sap/cds');
 
// module.exports = cds.service.impl(async function () {
//   const { A_BusinessPartner } = this.entities;
//   const bupa = await cds.connect.to('BusinessPartnerA2X');
 
//   this.on('READ', A_BusinessPartner, async (req) => {
//     return await bupa.run(req.query);
//   });
// });