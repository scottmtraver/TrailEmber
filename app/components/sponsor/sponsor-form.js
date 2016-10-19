import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.name': [
    validator('presence', true),
    validator('length', {
      min: 1
    })
  ],
  'model.linkUrl': [
    validator('presence', true),
    validator('format', {
      type: 'url'
    })
  ],
  'model.imageUrl': [
    validator('presence', true),
    validator('format', {
      type: 'url'
    })
  ]
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
