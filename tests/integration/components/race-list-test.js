import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('race-list', 'Integration | Component | race list', {
  integration: true
});

test('it renders a table', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{race-list}}`);

  // Template block usage:
  assert.equal(this.$('table').length, 1, 'should contain a table');
});

test('it renders a row for each race', function(assert) {
  let firstRace = Ember.Object.create({
    name: 'Race #1',
    description: 'Description #1'
  });
  let secondRace = Ember.Object.create({
    name: 'Race #2',
    description: 'Description #2'
  });

  let raceArray = [firstRace, secondRace];

  this.set('races', raceArray);

  this.render(hbs`{{race-list model=races}}`);

  // Template block usage:
  assert.equal(this.$('.race-row').length, 2, 'should contain two race rows');
});

test('it renders race rows with proper properties', function(assert) {
  assert.expect(2);
  let firstRace = Ember.Object.create({
    name: 'Race #1',
    description: 'Description #1'
  });

  let raceArray = [firstRace];

  this.set('races', raceArray);

  this.render(hbs`{{race-list model=races}}`);

  // Template block usage:
  assert.equal(this.$('.race-title').text(), firstRace.name, 'should have race title in first column');
  assert.equal(this.$('.race-description').text(), firstRace.description, 'should have race description in second column');
});
