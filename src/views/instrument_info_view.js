const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyView = function (container) {
  this.container = container;
};

InstrumentFamilyView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instruments-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentFamilyView.prototype.render = function (family) {
    console.log(`TEST ${this.container}`)
  this.container.innerHTML = '';

  const instruemntFamilyName = this.createElement('h2', family.name);
  this.container.appendChild(instruemntFamilyName);

  const instrumentFamilyDescription = this.createElement('p', family.description);
  this.container.appendChild(instrumentFamilyDescription);

  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(instrumentListTitle);

  const instrumentList = this.createInstrumentList(family.instruments);
  this.container.appendChild(instrumentList);
};

InstrumentFamilyView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

InstrumentFamilyView.prototype.createInstrumentList = function (instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  });

  return list;
};

module.exports = InstrumentFamilyView;