import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.name': {
    description: 'Sponsor',
    validators:[
      validator('presence', true),
      validator('length', {
        min: 1
      })
    ]
  },
  'model.linkUrl': {
    description: 'Link',
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
  notify: Ember.inject.service('notify'),
  model: {
    hasValidated: false,
    confirmDelete: false
  },
  actions: {
    delete() {
      // first pass set confirm delete
      if(this.get('model.confirmDelete')) {
        this.sendAction('setInactive', this.get('model'));
        this.get('notify').warning('Sponsor Deleted');
      } else {
        this.set('model.confirmDelete', true);
      }
    },
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
    }
  }
});
