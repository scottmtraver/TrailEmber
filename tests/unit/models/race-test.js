import { moduleForModel, test } from 'ember-qunit';

moduleForModel('race', 'Unit | Model | race', {
  // Specify the other units that are required for this test.
  needs: ['model:venue']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
