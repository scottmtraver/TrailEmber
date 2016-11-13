import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('venue/venue-view', 'Integration | Component | venue/venue view', {
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
  let firstVenue = server.create('venue');

  this.set('firstVenue', firstVenue);

  this.render(hbs`{{venue/venue-view model=firstVenue}}`);

  assert.equal(this.$('.rt-venue-preview').length, 1, 'should contain wrapper class');
  assert.equal(this.$('.rt-venue-name').text(), firstVenue.name, 'should show venue name');
  assert.equal(this.$('.rt-venue-logo-preview').first().attr('src'), firstVenue.imageUrl, 'should contain image with logo as src');
});
