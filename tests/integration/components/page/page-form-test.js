import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';
import Ember from 'ember';

moduleForComponent('page/page-form', 'Integration | Component | page/page form', {
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

  this.render(hbs`{{page/page-form}}`);

  assert.equal(this.$('form').length, 1, 'should contain a form');
});

test('it has all the appropriate fields', function(assert) {
  assert.expect(7);

  let page = server.create('page');

  this.set('page', page);

  this.render(hbs`{{page/page-form model=page}}`);

  assert.equal(this.$('form.rt-page-form').length, 1, 'should contain a single form');
  assert.equal(this.$('.rt-page-form .input__text.field__content').length, 1, 'should contain a rich content input');

  assert.equal(this.$('.rt-page-form input.cloudinary-fileupload').length, 1, 'should contain an image input');
  assert.equal(this.$('.rt-page-form .input__text.field__video').length, 1, 'should contain a viedo link input');
  assert.equal(this.$('.rt-page-form button.input__save').length, 1, 'should contain a save button');
  assert.equal(this.$('.rt-page-form button.input__cancel').length, 1, 'should contain a cancel button');
  assert.equal(this.$('.rt-page-form input.field_resultsUrl').length, 1, 'should contain a results url upload input');
});
test('it has basic validation', function(assert) {
  assert.expect(1);

  let page = server.create('page', { title: 'Homepage', content: '',
    imageUrl: 'http://www.test.com', videoUrl: 'https://www.youtube.com/watch?v=QE5qJ6Xw4FI' });//no content

  this.set('page', page);

  this.render(hbs`{{page/page-form model=page}}`);

  this.$('.rt-page-form button.input__save').click();//default state should not be valid

  assert.equal(this.$('.error').length, 1, 'should contain an error for the missing content');
});
