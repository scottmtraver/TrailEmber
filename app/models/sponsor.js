import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  name: attr('string'),
  linkUrl: attr('string'),
  imageUrl: attr('string'),
  isActive: attr('boolean'),
  races: DS.hasMany('race')
});
