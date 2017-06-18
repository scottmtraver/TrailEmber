import DS from 'ember-data';

import attr from 'ember-data/attr';

export default DS.Model.extend({
  imageUrl: attr('string'),
  isActive: attr('boolean'),
  date: attr('string'),
});