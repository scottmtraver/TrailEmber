import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('campaign/campaign-list', 'Integration | Component | campaign/campaign list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{campaign/campaign-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#campaign/campaign-list}}
      template block text
    {{/campaign/campaign-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
