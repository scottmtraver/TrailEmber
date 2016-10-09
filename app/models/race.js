import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  registrationTime: DS.attr(),
  startTime: DS.attr(),
  cost: DS.attr(),
  distance: DS.attr(),
  imageUrl: DS.attr(),
  resultsUrl: DS.attr(),
  courseUrl: DS.attr(),
  courseText: DS.attr()
});
