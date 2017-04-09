import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';
import Ember from 'ember';

moduleForComponent('card/card-form', 'Integration | Component | card/card form', {
  integration: true,
  beforeEach() {
    startMirage(this.container);

    //Cloudinary stub
    Ember.$.get = function() {
      return { done(cb) { cb({ some: 'response' }); } };
    };
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders', function(assert) {

  this.render(hbs`{{card/card-form}}`);

  assert.equal(this.$('form').length, 1, 'should contain a form');
});

test('it has all the appropriate fields', function(assert) {
  assert.expect(6);

  let card = server.create('card');

  this.set('card', card);

  this.render(hbs`{{card/card-form model=card}}`);

  assert.equal(this.$('form.rt-card-form').length, 1, 'should contain a single form');
  assert.equal(this.$('.rt-card-form input.input__text.field__title').length, 1, 'should contain a title input');
  assert.equal(this.$('.rt-card-form .input__text.field__content').length, 1, 'should contain a rich content input');

  assert.equal(this.$('.rt-card-form input.cloudinary-fileupload').length, 1, 'should contain an image input');
  assert.equal(this.$('.rt-card-form button.input__save').length, 1, 'should contain a save button');
  assert.equal(this.$('.rt-card-form button.input__cancel').length, 1, 'should contain a cancel button');
});
test('it has basic validation', function(assert) {
  assert.expect(1);

  let card = server.create('card', { title: '' });//no name

  this.set('card', card);

  this.render(hbs`{{card/card-form model=card}}`);

  this.$('.rt-card-form button.input__save').click();//default state should not be valid

  assert.equal(this.$('.error').length, 1, 'should contain an error for the missing title');
});
