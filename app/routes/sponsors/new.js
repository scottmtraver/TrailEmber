import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('sponsor');
  },
  actions:{
    save: function(newSponsor){
      newSponsor.save().then(() => {
        this.transitionTo('sponsors');
      });
    },
    cancel: function(){
      this.transitionTo('sponsors');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
