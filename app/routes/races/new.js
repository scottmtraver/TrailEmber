import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      race: this.store.createRecord('race'),
      venueOptions: this.store.findAll('venue')
    });
  },
  actions:{
    save: function(newRace){
      newRace.save().then(() => {
        this.transitionTo('races');
      });
    },
    cancel: function(){
      this.transitionTo('races');
    },
    willTransition() {
      this.controller.get('model.race').rollbackAttributes();
    }
  }
});

