import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-page', 'Integration | Component | login page', {
  integration: true
});
test('it renders', function(assert) {

  this.render(hbs`{{login-page}}`);

  assert.equal(this.$('form').length, 1, 'should contain a form');
});
