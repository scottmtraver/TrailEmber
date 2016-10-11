import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  date: attr('string'),
  registrationTime: attr('string'),
  startTime: attr('string'),
  cost: attr('string'),
  distance: attr('string'),
  imageUrl: attr('string'),
  resultsUrl: attr('string'),
  courseUrl: attr('string'),
  courseText: attr('string')
});
