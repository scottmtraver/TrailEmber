import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  directionsUrl: attr('string'),
  linkUrl: attr('string'),
  imageUrl: attr('string')
});
