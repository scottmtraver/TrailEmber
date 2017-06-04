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
    clearResults() {
      this.set('model.resultsUrl', null);
    },
    uploadResults (event) {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var file = e.srcElement.result;

        this.get('model').uploadResults({ file: file }).then(response => {
          if(response.error) {
            this.get('notify').error('Upload Failed');
          } else {
            this.set('model.resultsUrl', response.url);
            this.get('notify').success('Results Uploaded');
          }
        });
      }.bind(this);
      fileReader.readAsDataURL(event.target.files[0]);
    },
    updateContent(value) {
      this.set('model.courseDescription', value);
    }
  }
});

