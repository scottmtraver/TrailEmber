import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return 'Card ' + i + ' ' + faker.lorem.sentence(); },
  content() { return faker.lorem.paragraph(); },
  imageUrl() { return faker.image.imageUrl(); },
  order(i) { return Number(i) + 1; },
  isActive() { return true; },
});
