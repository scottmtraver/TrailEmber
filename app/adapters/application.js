import DS from 'ember-data';
//import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: '/api',

  /*
  pathForType: function(modelName) {
    var underscored = Ember.String.underscore(modelName);
    return Ember.String.pluralize(underscored);
  }
 */
});
