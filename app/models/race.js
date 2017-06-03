import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  name: attr('string', {  defaultValue: '' }),
  date: attr('string'),
  registrationTime: attr('string'),
  startTime: attr('string'),
  cost: attr('string'),
  distance: attr('string'),
  resultsUrl: attr('string', { defaultValue: '' }),
  courseUrl: attr('string', { defaultValue: '' }),
  imageUrl: attr('string', { defaultValue: '' }),// this is the course image
  courseDescription: attr('string', { defaultValue: '' }),
  venue: DS.belongsTo('venue'),
  sponsor: DS.belongsTo('sponsor'),

  uploadResults(params) {
    const adapter = this.store.adapterFor(this.constructor.modelName);
    return adapter.uploadResults(this, params);
  }
});
