import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageUrl: attr('string'),
  order: attr('number'),
  isActive: attr('boolean')
});
