import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  bib: attr('string'),
  name: attr('string'),
  added: attr('date'),

  campaign: DS.belongsTo('campaign')

});
