const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamilyView = require('./views/instrument_info_view.js');
const instrumentFamilyData = require('./data/instrument_family_data.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentDiv = document.querySelector('div#instrument-family');
  const instrumentFamilyView = new InstrumentFamilyView(instrumentDiv);
  instrumentFamilyView.bindEvents();

  const instrumentDataSource = new InstrumentFamilies(instrumentFamilyData);
  instrumentDataSource.bindEvents();
});
