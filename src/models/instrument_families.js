const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('instruments:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-instruments-ready', selectedFamily)
};

module.exports = InstrumentFamilies;
