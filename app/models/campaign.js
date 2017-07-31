import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: attr('string'),
  videoUrl: attr('string'),
  isActive: attr('boolean'),

  campaignEntries: DS.hasMany('campaign-entry')
});
