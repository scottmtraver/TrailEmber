import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('venue/venue-list', 'Integration | Component | venue/venue list', {
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

  this.render(hbs`{{venue/venue-list}}`);

  assert.equal(this.$('table').length, 1, 'should contain a table');
});
test('it renders a row for each venue', function(assert) {
  assert.expect(1);

  let venues = server.createList('venues', 2);

  this.set('venues', venues);

  this.render(hbs`{{venue/venue-list model=venues}}`);

  assert.equal(this.$('.rt-venue-row').length, 2, 'should contain two venue rows');
});

test('it renders venue rows with proper properties', function(assert) {
  assert.expect(6);

  let firstVenue = server.create('venue');

  let venues = [firstVenue];

  this.set('venues', venues);

  this.render(hbs`{{venue/venue-list model=venues}}`);

  assert.equal(this.$('.rt-venue-name').text(), firstVenue.name, 'should show venue name');
  assert.equal(this.$('.rt-venue-logo').children().first().attr('src'), firstVenue.imageUrl, 'should contain image with logo as src');
  assert.equal(this.$('.rt-venue-logo').children().first().attr('alt'), 'Venue Logo', 'should contain image with proper alt text');
  assert.equal(this.$('.rt-venue-link a').text(), firstVenue.linkUrl, 'should have proper link href');
  assert.equal(this.$('.rt-venue-link a').attr('href'), firstVenue.linkUrl, 'should have proper link text');
  assert.equal(this.$('.rt-venue-edit a').text(), 'Edit', 'should have link to edit venue');
});

