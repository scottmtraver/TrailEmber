import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-menu', 'Integration | Component | main menu', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{main-menu}}`);

  assert.equal(this.$('.rt-main-menu').length, 1, 'should contain a main menu');
});
