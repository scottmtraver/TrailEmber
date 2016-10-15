import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sponsor/sponsor-form', 'Integration | Component | sponsor/sponsor form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sponsor/sponsor-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sponsor/sponsor-form}}
      template block text
    {{/sponsor/sponsor-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
