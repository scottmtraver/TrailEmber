import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('venue');
  },
  actions:{
    save: function(newVenue){
      newVenue.save().then(() => {
        this.transitionTo('venues');
      });
    },
    cancel: function(){
      this.transitionTo('venues');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});

