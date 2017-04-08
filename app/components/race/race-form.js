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
  notify: Ember.inject.service('notify'),
  model: {
    hasValidated: false
  },
  actions: {
    save() {
      this.set('hasValidated', true);
      if(this.get('validations.isValid')) {
        this.sendAction('save', this.get('model'));
        this.get('notify').success('Changes Saved');
      } else {
        this.get('notify').alert('Please Complete Form');
      }
    },
    cancel() {
      this.sendAction('cancel');
      this.get('notify').warning('Changes Canceled');
    },
    changeDate(newDate) {
      this.set('model.date', newDate);
    },
    imageUploaded (event, data) {
      var url = data._response.result.secure_url;
      this.set('model.courseImageUrl', url);
      this.get('notify').success('Image Uploaded');
    },
    resultsUploaded (event, data) {
      var url = data._response.result.secure_url;
      this.set('model.resultsUrl', url);
      this.get('notify').success('Results Uploaded');
    }
  }
});

