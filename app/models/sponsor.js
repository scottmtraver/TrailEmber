import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  text: attr('string'),
  linkUrl: attr('string'),
  imageUrl: attr('string'),
});
