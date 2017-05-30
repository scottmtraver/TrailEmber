import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';
import Ember from 'ember';

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

  this.render(hbs`{{card/card-list model=[]}}`);

  // Template block usage:
  assert.equal(this.$('table').length, 1, 'should contain a table');
});

test('it renders a row for each card', function(assert) {
  assert.expect(1);

  let cards = server.createList('card', 2).map(card => Ember.Object.create(card));

  this.set('cards', cards);

  this.render(hbs`{{card/card-list model=cards}}`);

  // Template block usage:
  assert.equal(this.$('.rt-card-row').length, 2, 'should contain two card rows');
});


test('it renders card rows with proper properties', function(assert) {
  assert.expect(4);

  let firstCard = server.create('card', { isActive: true });

  let cardArray = [firstCard];

  this.set('cards', cardArray);

  this.render(hbs`{{card/card-list model=cards}}`);

  // Template block usage:
  assert.equal(this.$('.rt-card-title').text(), firstCard.title, 'should show card title');
  assert.equal(this.$('.rt-card-active').text(), 'Yes', 'should show card active flag');
  assert.equal(this.$('.rt-card-order').text(), '1', 'should show card order number');
  assert.equal(this.$('.rt-card-order').text(), '1', 'should show card order number');

});

test('it renders card rows with proper controls', function(assert) {
  assert.expect(2);

  let firstCard = server.create('card', { isActive: true });

  let cardArray = [firstCard];

  this.set('cards', cardArray);

  this.render(hbs`{{card/card-list model=cards}}`);

  // Template block usage:
  assert.equal(this.$('.rt-card-edit').length, 1, 'should have card edit button');
  assert.equal(this.$('.rt-card-move_first').length, 1, 'should have card move to top button');

});

test('it renders card in sorted order', function(assert) {
  assert.expect(3);

  //two active cards
  let cardArray = server.createList('card', 2).map((card, i) => Ember.Object.create(card, { isActive: true, order: i + 1 }));
  //one inactive card
  cardArray.push(Ember.Object.create(server.create('card', { isActive: false })));

  this.set('cards', cardArray);

  this.render(hbs`{{card/card-list model=cards}}`);

  // Template block usage:
  assert.equal(this.$('.rt-card-order').length, 2, 'should only active cards should have order numbers');
  assert.equal(this.$('.rt-card-order')[0].innerHTML, '1', 'should have first card in topmost position');
  assert.equal(this.$('.rt-card-order')[1].innerHTML, '2', 'should have second card in second position');

});