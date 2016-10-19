import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('race');
  },
  actions:{
    save: function(newVenue){
      newVenue.save().then(() => {
        this.transitionTo('races');
      });
    },
    cancel: function(){
      this.transitionTo('races');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});

