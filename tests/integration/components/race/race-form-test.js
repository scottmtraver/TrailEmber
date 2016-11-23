import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('race/race-form', 'Integration | Component | race/race form', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
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
  let race = server.create('race', { venue });

  this.set('race', race);

  this.render(hbs`{{race/race-form model=race}}`);

  assert.equal(this.$('.rt-race-form input.input__text.field__name').length, 1, 'should contain a name input');
  assert.equal(this.$('.rt-race-form textarea.input__text.field__description').length, 1, 'should contain a description input');
  assert.equal(this.$('.rt-race-form input.input__date.field__date').length, 1, 'should contain a date input');

  assert.equal(this.$('.rt-race-form input.input__time.field__registration').length, 1, 'should contain a registration time input');
  assert.equal(this.$('.rt-race-form input.input__time.field__start').length, 1, 'should contain a start time input');

  assert.equal(this.$('.rt-race-form input.input__text.field__cost').length, 1, 'should contain a cost input');
  assert.equal(this.$('.rt-race-form input.input__text.field__distance').length, 1, 'should contain a distance input');

  assert.equal(this.$('.rt-race-form input.input__url.field__image').length, 1, 'should contain an image input');
  assert.equal(this.$('.rt-race-form input.input__url.field__results').length, 1, 'should contain a results input');

  assert.equal(this.$('.rt-race-form input.input__url.field__courseLink').length, 1, 'should contain a course link input');
  assert.equal(this.$('.rt-race-form textarea.input__text.field__courseText').length, 1, 'should contain a course text input');

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
  assert.expect(1);

  let venue = server.create('venue');
  let race = server.create('race', { venue });

  this.set('race', race);

  this.render(hbs`{{race/race-form model=race}}`);

  assert.equal(this.$('.rt-venue-preview').length, 1, 'should contain a venue preview component');
});