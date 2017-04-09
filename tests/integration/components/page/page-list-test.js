import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('rt-page-list', 'Integration | Component | page list', {
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

  this.render(hbs`{{page/page-list}}`);

  // Template block usage:
  assert.equal(this.$('table').length, 1, 'should contain a table');
});

test('it renders a row for each page', function(assert) {
  assert.expect(1);

  let pages = server.createList('page', 2);

  this.set('pages', pages);

  this.render(hbs`{{page/page-list model=pages}}`);

  // Template block usage:
  assert.equal(this.$('.rt-page-row').length, 2, 'should contain two page rows');
});

test('it renders page rows with proper properties', function(assert) {
  assert.expect(1);

  let firstPage = server.create('page', { title: 'test title' });

  let pageArray = [firstPage];

  this.set('pages', pageArray);

  this.render(hbs`{{page/page-list model=pages}}`);

  // Template block usage:
  assert.equal(this.$('.rt-page-title').text(), firstPage.title, 'should show page title');

});

