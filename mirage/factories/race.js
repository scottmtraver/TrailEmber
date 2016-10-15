import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return 'Race ' + i + ' ' + faker.lorem.sentence(); },
  description() { return faker.lorem.sentences(); },

});

/*
 * // mirage/factories/author.js
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Person ${i}`; },
  age: 28,
  admin: false,
  avatar() { return faker.internet.avatar(); }
});
*/
