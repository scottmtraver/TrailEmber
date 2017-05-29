import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';
import moment from 'moment';
import Ember from 'ember';

moduleForComponent('rt-race-list', 'Integration | Component | race list', {
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

  this.render(hbs`{{race/race-list raceList=[]}}`);

  // Template block usage:
  assert.equal(this.$('table').length, 1, 'should contain a table');
});

test('it renders a row for each race', function(assert) {
  assert.expect(1);

  let races = server.createList('race', 3);
  races = races.map(race => Ember.Object.create(race, { date: new Date() }));
  //const model = server.createList('wine', 12).map(wine => Ember.Object.create(wine));

  this.set('races', races);

  this.render(hbs`{{race/race-list raceList=races}}`);

  // Template block usage:
  assert.equal(this.$('.rt-race-row').length, 3, 'should contain three race rows');
});

test('it renders race rows with proper properties', function(assert) {
  assert.expect(5);

  let firstRace = server.create('race');
  let venue = server.create('venue', {name: 'venue name'});
  let sponsor = server.create('sponsor', {name: 'sponsor name'});
  firstRace.venue = venue;
  firstRace.sponsor = sponsor;

  let raceArray = [firstRace];

  this.set('races', raceArray);

  this.render(hbs`{{race/race-list raceList=races}}`);

  // Template block usage:
  assert.equal(this.$('.rt-race-title').text(), firstRace.name, 'should show race title');
  assert.equal(this.$('.rt-race-date').text(), moment(firstRace.date).format("MMM Do YYYY"),
               'should show properly formatted date');
  assert.equal(this.$('.rt-race-venue').text(), firstRace.venue.name, 'should show race venue name');
  assert.equal(this.$('.rt-race-sponsor').text(), firstRace.sponsor.name, 'should show race sponsor name');
  assert.equal(this.$('.rt-race-edit a').text(), 'Edit', 'should have link to edit race');
});