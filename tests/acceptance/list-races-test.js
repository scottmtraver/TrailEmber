import { test } from 'qunit';
import moduleForAcceptance from 'trail-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list races');

test('visiting /list-races', function(assert) {
  visit('/list-races');

  andThen(function() {
    assert.equal(currentURL(), '/list-races');
  });
});

test('should list all races.', function (assert) {
  visit('/list-races');
  andThen(function () {
    assert.equal(find('.race').length, 4, 'should list 4 races in the races table');
  });
});

/*
test('should link to each individual race.', function (assert) {
});

test('should show details for each specific race.', function (assert) {
});
*/
