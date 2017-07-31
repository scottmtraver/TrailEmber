import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.name': {
    description: 'Campaign',
    validators:[
      validator('presence', true),
      validator('length', {
        min: 1
      })
    ]
  },
  'model.videoUrl': {
    description: 'Video',
    validators: [
    validator('presence', true),
    ]
  },
});

export default Ember.Component.extend(Validations, {
  notify: Ember.inject.service('notify'),
  model: {
    hasValidated: false,
    confirmDelete: false
  },
  actions: {
    save() {
      this.set('hasValidated', true);
      if(this.get('validations.isValid')) {
        this.get('notify').success('Changes Saved');
        this.sendAction('save', this.get('model'));
      } else {
        this.get('notify').alert('Please Complete Form');
      }
    },
    cancel() {
      this.get('notify').warning('Changes Canceled');
      this.sendAction('cancel');
    },
    delete() {
      // first pass set confirm delete
      if(this.get('model.confirmDelete')) {
        this.sendAction('setInactive', this.get('model'));
        this.get('notify').warning('Campaign De-activated');
      } else {
        this.set('model.confirmDelete', true);
      }
    },
  }
});
