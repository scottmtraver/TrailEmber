import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('sponsor/sponsor-list', 'Integration | Component | sponsor/sponsor list', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sponsor/sponsor-list}}`);

  assert.equal(this.$('table').length, 1, 'should contain a table');
});
test('it renders a row for each sponsor', function(assert) {
  assert.expect(1);

  let sponsors = server.createList('sponsors', 2);

  this.set('sponsors', sponsors);

  this.render(hbs`{{sponsor/sponsor-list model=sponsors}}`);

  // Template block usage:
  assert.equal(this.$('.rt-sponsor-row').length, 2, 'should contain two sponsor rows');
});

test('it renders sponsor rows with proper properties', function(assert) {
  assert.expect(6);

  let firstSponsor = server.create('sponsor');

  let sponsors = [firstSponsor];

  this.set('sponsors', sponsors);

  this.render(hbs`{{sponsor/sponsor-list model=sponsors}}`);

  // Template block usage:
  assert.equal(this.$('.rt-sponsor-name').text(), firstSponsor.name, 'should show sponsor name');
  assert.equal(this.$('.rt-sponsor-logo').children().first().attr('src'), firstSponsor.imageUrl, 'should contain image with logo as src');
  assert.equal(this.$('.rt-sponsor-logo').children().first().attr('alt'), 'Sponsor Logo', 'should contain image with proper alt text');
  assert.equal(this.$('.rt-sponsor-link a').text(), firstSponsor.linkUrl, 'should have proper link href');
  assert.equal(this.$('.rt-sponsor-link a').attr('href'), firstSponsor.linkUrl, 'should have proper link text');
  assert.equal(this.$('.rt-sponsor-edit a').text(), 'Edit', 'should have link to edit sponsor');
});

