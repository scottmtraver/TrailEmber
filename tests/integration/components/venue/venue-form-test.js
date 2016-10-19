import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('venue/venue-form', 'Integration | Component | venue/venue form', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders', function(assert) {

  this.render(hbs`{{venue/venue-form}}`);

  assert.equal(this.$('form').length, 1, 'should contain a form');
});
test('it has all the appropriate fields', function(assert) {
  assert.expect(8);

  let venue = server.create('venue');

  this.set('venue', venue);

  this.render(hbs`{{venue/venue-form model=venue}}`);

  assert.equal(this.$('form.rt-venue-form').length, 1, 'should contain a single form');
  assert.equal(this.$('.rt-venue-form input.input__text.field__name').length, 1, 'should contain a name input');
  assert.equal(this.$('.rt-venue-form input.input__text.field__description').length, 1, 'should contain a description input');
  assert.equal(this.$('.rt-venue-form input.input__url.field__directions').length, 1, 'should contain a directions url input');
  assert.equal(this.$('.rt-venue-form input.input__url.field__website').length, 1, 'should contain a website url input');
  assert.equal(this.$('.rt-venue-form input.input__url.field__image').length, 1, 'should contain an image input');
  assert.equal(this.$('.rt-venue-form button.input__save').length, 1, 'should contain a save button');
  assert.equal(this.$('.rt-venue-form button.input__cancel').length, 1, 'should contain a cancel button');
});
test('it has basic validation', function(assert) {
  assert.expect(1);

  let venue = server.create('venue', { name: '' });//no name

  this.set('venue', venue);

  this.render(hbs`{{venue/venue-form model=venue}}`);

  this.$('.rt-venue-form button.input__save').click();//default state should not be valid

  assert.equal(this.$('.error').length, 1, 'should contain an error for the missing name');
});

