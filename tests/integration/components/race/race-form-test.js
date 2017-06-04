import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';
import Ember from 'ember';

moduleForComponent('race/race-form', 'Integration | Component | race/race form', {
  integration: true,
  beforeEach() {
    startMirage(this.container);

    Ember.$.get = function() {
      return { done(cb) { cb({ some: 'response' }); } };
    };
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{race/race-form}}`);

  assert.equal(this.$('form').length, 1, 'should contain a form');
});
test('it has all the appropriate static fields', function(assert) {

  let venue = server.create('venue');
  let sponsor = server.create('sponsor');
  let race = server.create('race', { venue, sponsor });

  this.set('race', race);

  this.render(hbs`{{race/race-form model=race}}`);

  assert.equal(this.$('.rt-race-form input.input__text.field__name').length, 1, 'should contain a name input');
  assert.equal(this.$('.rt-race-form input.input__date.field__date').length, 1, 'should contain a date input');

  assert.equal(this.$('.rt-race-form input.input__time.field__registration').length, 1, 'should contain a registration time input');
  assert.equal(this.$('.rt-race-form input.input__time.field__start').length, 1, 'should contain a start time input');

  assert.equal(this.$('.rt-race-form input.input__text.field__cost').length, 1, 'should contain a cost input');
  assert.equal(this.$('.rt-race-form input.input__text.field__distance').length, 1, 'should contain a distance input');

  assert.equal(this.$('.rt-race-form input.cloudinary-fileupload.field__courseImageUrl').length, 1, 'should contain an image input');
  assert.equal(this.$('.rt-race-form input.field_resultsUrl').length, 1, 'should contain a results url upload input');

  assert.equal(this.$('.rt-race-form input.input__url.field__courseLink').length, 1, 'should contain a course link input');
  assert.equal(this.$('.rt-race-form .input__text.field__courseText').length, 1, 'should contain a course text input');

  assert.equal(this.$('.rt-race-form button.input__save').length, 1, 'should contain a save button');
  assert.equal(this.$('.rt-race-form button.input__cancel').length, 1, 'should contain a cancel button');
});
test('it has basic validation', function(assert) {
  assert.expect(1);

  let race = server.create('race', { venue: null, name: '' });

  this.set('race', race);

  this.render(hbs`{{race/race-form model=race}}`);

  this.$('.rt-race-form button.input__save').click();//default state should not be valid

  assert.equal(this.$('.error').length, 2, 'should contain an error for the missing name and venue');
});

test('it has basic validation', function(assert) {
  assert.expect(2);

  let venue = server.create('venue');
  let sponsor = server.create('sponsor');
  let race = server.create('race', { venue, sponsor });

  this.set('race', race);

  this.render(hbs`{{race/race-form model=race}}`);

  assert.equal(this.$('.rt-venue-preview').length, 1, 'should contain a venue preview component');
  assert.equal(this.$('.rt-sponsor-preview').length, 1, 'should contain a sponsor preview component');
});

test('results controls toggle', function(assert) {
  assert.expect(2);

  let venue = server.create('venue');
  let sponsor = server.create('sponsor');
  let race = server.create('race', { venue, sponsor, resultsUrl: 'www.test.com' });

  this.set('race', race);

  this.render(hbs`{{race/race-form model=race}}`);

  assert.equal(this.$('.rt-race-form button.control_remove_resultsUrl').length, 1, 'should contain a results remove control');

  race.resultsUrl = null;
  this.set('race', race);
  this.render(hbs`{{race/race-form model=race}}`);

  assert.equal(this.$('.rt-race-form input.field_resultsUrl').length, 1, 'should contain a results url upload input');
});
