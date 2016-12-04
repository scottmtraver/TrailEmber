import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return 'Race ' + i + ' ' + faker.lorem.sentence(); },
  date() { return new Date(); },
  registrationTime() { return faker.random.number() + ' PM'; },
  startTime() { return faker.random.number() + ' PM'; },
  cost() { return faker.random.number() + '$'; },
  distance() { return faker.lorem.sentence(); },
  imageUrl() { return faker.image.imageUrl(); },
  resultsUrl() { return faker.internet.url(); },
  courseUrl() { return faker.internet.url(); },
  courseImageUrl() { return faker.image.imageUrl(); },
  courseDescription() { return faker.lorem.sentences(); }
});
