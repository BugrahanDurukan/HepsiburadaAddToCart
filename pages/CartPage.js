const { I } = inject();

module.exports = {
  fields: {
    merchantName: { xpath: "(//div[contains(text(), 'Satıcı')]/span/a)[1]" },
    otherMerchantName: {
      xpath: "(//div[contains(text(), 'Satıcı')]/span/a)[2]",
    },
  },
  async grabMerchantName() {
    return await I.grabTextFrom(this.fields.merchantName);
  },
  async grabOtherMerchantName() {
    return await I.grabTextFrom(this.fields.otherMerchantName);
  },
};
