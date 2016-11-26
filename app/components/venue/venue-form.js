import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.name': {
    description: 'Name',
    validators:[
      validator('presence', true),
      validator('length', {
        min: 1
      })
    ]
  },
  'model.linkUrl':{
    description: 'Website',
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'url'
      })
    ]
  },
  'model.directionsUrl': {
    description: 'Direcitons',
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'url'
      })
    ]
  },
  'model.imageUrl': {
    description: 'Image',
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'url'
      })
    ]
  }
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

