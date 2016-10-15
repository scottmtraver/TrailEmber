import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return 'Sponsor ' + i + ' ' + faker.lorem.sentence(); },
  text() { return faker.lorem.sentences(); },
  linkUrl() { return faker.internet.url(); },
  imageUrl() { return faker.image.imageUrl(); }
});
