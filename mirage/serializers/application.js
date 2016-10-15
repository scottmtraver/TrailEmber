import { JSONAPISerializer } from 'ember-cli-mirage';
import Ember from 'ember';

var underscore = Ember.String.underscore;

export default JSONAPISerializer.extend({
  keyForModel: underscore,
  keyForCollection: underscore,
  keyForAttribute: underscore,
  keyForRelationship: underscore
});
