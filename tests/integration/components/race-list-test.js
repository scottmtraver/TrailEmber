import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/mirage-integration';
import moment from 'moment';

moduleForComponent('race-list', 'Integration | Component | race list', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders a table', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{race-list}}`);

  // Template block usage:
  assert.equal(this.$('table').length, 1, 'should contain a table');
});

test('it renders a row for each race', function(assert) {
  assert.expect(1);

  let races = server.createList('race', 2);

  this.set('races', races);

  this.render(hbs`{{race-list model=races}}`);

  // Template block usage:
  assert.equal(this.$('.race-row').length, 2, 'should contain two race rows');
});

test('it renders race rows with proper properties', function(assert) {
  assert.expect(2);

  let firstRace = server.create('race');

  let raceArray = [firstRace];

  this.set('races', raceArray);

  this.render(hbs`{{race-list model=races}}`);

  // Template block usage:
  assert.equal(this.$('.race-title').text(), firstRace.name, 'should show race title');
  assert.equal(this.$('.race-date').text(), moment(firstRace.date).format("MMM Do YYYY"),
               'should show properly formatted date');
});
