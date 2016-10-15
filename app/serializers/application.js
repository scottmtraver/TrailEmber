//app/serializers/application.js
import Ember from 'ember';
import DS from 'ember-data';

var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForModel: underscore,
  keyForCollection: underscore,
  keyForAttribute: underscore,
  keyForRelationship: underscore
});
