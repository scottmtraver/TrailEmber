import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.title': {
    description: 'Title',
    validators: [
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
  options: {
    height: 300,
    theme: "modern",
    plugins: ["advlist autolink lists link image charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars code fullscreen", "insertdatetime media nonbreaking save table contextmenu directionality", "emoticons template paste textcolor colorpicker textpattern imagetools"],
    toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    toolbar2: "print preview media | forecolor backcolor emoticons",
    image_advtab: !0,
    templates: [{
      title: "Test template 1",
      content: "Test 1"
    }, {
      title: "Test template 2",
      content: "Test 2"
    }]
  },
  actions: {
    save() {
      this.set('hasValidated', true);
      if (this.get('validations.isValid')) {
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
    imageUploaded(event, data) {
      var url = data._response.result.secure_url;
      this.set('model.imageUrl', url);
      this.get('notify').success('Image Uploaded');
    },
    toggleActive() {
      this.set('model.isActive', !this.get('model.isActive'));
      if(!this.get('model.isActive')) {
        this.set('model.order', 999);
      } 
    }
  }
});
