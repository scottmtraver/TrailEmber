import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';
import Ember from 'ember';

moduleForComponent('sponsor/sponsor-form', 'Integration | Component | sponsor/sponsor form', {
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
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sponsor/sponsor-form}}`);

  assert.equal(this.$('form').length, 1, 'should contain a form');
});
test('it has all the appropriate fields', function(assert) {
  assert.expect(6);

  let sponsor = server.create('sponsor');

  this.set('sponsor', sponsor);

  this.render(hbs`{{sponsor/sponsor-form model=sponsor}}`);

  assert.equal(this.$('form.rt-sponsor-form').length, 1, 'should contain a single form');
  assert.equal(this.$('.rt-sponsor-form input.input__text.field__name').length, 1, 'should contain a name input');
  assert.equal(this.$('.rt-sponsor-form input.input__url.field__website').length, 1, 'should contain a website url input');
  assert.equal(this.$('.rt-sponsor-form input.cloudinary-fileupload').length, 1, 'should contain an image input');
  assert.equal(this.$('.rt-sponsor-form button.input__save').length, 1, 'should contain a save button');
  assert.equal(this.$('.rt-sponsor-form button.input__cancel').length, 1, 'should contain a cancel button');
});
test('it has basic validation', function(assert) {
  assert.expect(1);

  let sponsor = server.create('sponsor', { name: '' });//no name

  this.set('sponsor', sponsor);

  this.render(hbs`{{sponsor/sponsor-form model=sponsor}}`);

  this.$('.rt-sponsor-form button.input__save').click();//default state should not be valid

  assert.equal(this.$('.error').length, 1, 'should contain an error for the missing name');
});
