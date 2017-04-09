import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return 'Card ' + i + ' ' + faker.lorem.sentence(); },
  content() { return faker.lorem.paragraph(); },
  imageUrl() { return faker.image.imageUrl(); },
  videoUrl() { return faker.image.imageUrl(); },//I know this ins't a video but it's a valid url format
});
