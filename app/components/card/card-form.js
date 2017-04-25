import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.title': {
    description: 'Title',
    validators:[
      validator('presence', true),
      validator('length', {
        min: 1
      })
    ]
  },
  'model.content': {
    description: 'Content',
    validators: [
    validator('presence', true),
      validator('length', {
        min: 1
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
  notify: Ember.inject.service('notify'),
  model: {
    hasValidated: false
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
    imageUploaded (event, data) {
      var url = data._response.result.secure_url;
      this.set('model.imageUrl', url);
      this.get('notify').success('Image Uploaded');
    },
    toggleActive() {
      this.set('model.isActive', !this.get('model.isActive'));
    },
    updateContent(value) {
      this.set('model.content', value);
    }
  }
});
