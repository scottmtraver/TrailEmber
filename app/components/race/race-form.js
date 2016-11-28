import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({

  'model.name': {
    description: 'Name',
    validators: [
    validator('presence', true),
    validator('length', {
      min: 1
    })
  ]},
  'model.date': {
    description: 'Date',
    validators: [
    validator('presence', true)
  ]},
  'model.registrationTime': {
    description: 'Registration Time',
    validators:[
    validator('presence', true)
  ]},
  'model.startTime': {
    description: 'Start Time',
    validators: [
    validator('presence', true)
  ]},
  'model.cost': {
    description: 'Cost',
    validators: [
    validator('presence', true)
  ]},
  'model.distance': {
    description: 'Distance',
    validators: [
    validator('presence', true)
  ]},
  'model.venue': {
    description: 'Venue',
    validators: [
    validator('presence', true)
  ]}
});

export default Ember.Component.extend(Validations, {
  model: {
    hasValidated: false
  },
  actions: {
    save() {
      this.set('hasValidated', true);
      if(this.get('validations.isValid')) {
        this.sendAction('save', this.get('model'));
      }
    },
    cancel() {
      this.sendAction('cancel');
    }
  }
});

