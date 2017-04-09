import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('rt-card-list', 'Integration | Component | card list', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders a table', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{card/card-list}}`);

  // Template block usage:
  assert.equal(this.$('table').length, 1, 'should contain a table');
});

test('it renders a row for each card', function(assert) {
  assert.expect(1);

  let cards = server.createList('card', 2);

  this.set('cards', cards);

  this.render(hbs`{{card/card-list model=cards}}`);

  // Template block usage:
  assert.equal(this.$('.rt-card-row').length, 2, 'should contain two card rows');
});

test('it renders card rows with proper properties', function(assert) {
  assert.expect(2);

  let firstCard = server.create('card', { isActive: true });

  let cardArray = [firstCard];

  this.set('cards', cardArray);

  this.render(hbs`{{card/card-list model=cards}}`);

  // Template block usage:
  assert.equal(this.$('.rt-card-title').text(), firstCard.title, 'should show card title');
  assert.equal(this.$('.rt-card-active').text(), 'Yes', 'should show card active flag');

});

