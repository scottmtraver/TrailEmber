import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return 'Venue ' + i + ' ' + faker.lorem.sentence(); },
  description() { return faker.lorem.sentences(); },
  directionsUrl() { return faker.internet.url(); },
  linkUrl() { return faker.internet.url(); },
  imageUrl() { return faker.image.imageUrl(); }
});
/*
 name: jsonApi.Joi.string(),
    description: jsonApi.Joi.string(),
    directions_url: jsonApi.Joi.string().uri(),
    link_url: jsonApi.Joi.string().uri(),
    image_url: jsonApi.Joi.string().uri(),

    races: jsonApi.Joi.belongsToMany({
      resource: 'races',
      as: 'venue'
    }),
*
 */
