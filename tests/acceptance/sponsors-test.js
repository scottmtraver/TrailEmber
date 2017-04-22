/*
import { test } from 'qunit';
import moduleForAcceptance from 'trail-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sponsors');

test('visiting /sponsors', function(assert) {
  visit('/sponsors');

  andThen(function() {
    assert.equal(currentURL(), '/sponsors');
  });
});

test('visiting /sponsors clicking edit row link', function(assert) {
  server.createList('sponsors', 2);

  visit('/sponsors');

  andThen(function() {
    let button = findWithAssert('.rt-sponsor-edit a').first();

    click(button);

    andThen(function () {
      assert.equal(currentURL(), '/sponsors/1/edit', 'clicking on first sponsor link navigates to edit that sponsor');
    });
  });
});

test('visiting /sponsors clicking new link', function(assert) {
  visit('/sponsors');

  andThen(function() {
    let button = findWithAssert('.rt-sponsor-new').first();

    click(button);

    andThen(function () {
      assert.equal(currentURL(), '/sponsors/new', 'clicking on create sponsor link takes you to new sponsor route');
    });
  });
});
*/
