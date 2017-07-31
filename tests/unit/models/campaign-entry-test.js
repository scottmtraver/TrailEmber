import { moduleForModel, test } from 'ember-qunit';

moduleForModel('campaign-entry', 'Unit | Model | campaign entry', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
