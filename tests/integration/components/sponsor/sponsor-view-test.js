import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/mirage-integration';

moduleForComponent('sponsor/sponsor-view', 'Integration | Component | sponsor/sponsor view', {
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
  let firstSponsor = server.create('sponsor');

  this.set('firstSponsor', firstSponsor);

  this.render(hbs`{{sponsor/sponsor-view model=firstSponsor}}`);

  assert.equal(this.$('.rt-sponsor-preview').length, 1, 'should contain wrapper class');
  assert.equal(this.$('.rt-sponsor-name').text(), firstSponsor.name, 'should show sponsor name');
  assert.equal(this.$('.rt-sponsor-logo-preview').first().attr('src'), firstSponsor.imageUrl, 'should contain image with logo as src');
});
