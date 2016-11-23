import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.name': [
    validator('presence', true),
    validator('length', {
      min: 1
    })
  ],
  'model.description': [
    validator('presence', true)
  ],
  'model.date': [
    validator('presence', true)
  ],
  'model.registrationTime': [
    validator('presence', true)
  ],
  'model.startTime': [
    validator('presence', true)
  ],
  'model.cost': [
    validator('presence', true)
  ],
  'model.distance': [
    validator('presence', true)
  ],
  'model.venue': [
    validator('presence', true)
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
    },
    select(venue) {
      this.set('model.venueId', venue.id);
    }
  }
});

