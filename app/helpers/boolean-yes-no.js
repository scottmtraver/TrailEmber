import Ember from 'ember';

export function booleanYesNo([params]) {
  return params ? 'Yes' : 'No';
}

export default Ember.Helper.helper(booleanYesNo);