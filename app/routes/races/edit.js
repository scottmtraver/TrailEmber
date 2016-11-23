import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      race: this.store.find('race', params.race_id),
      venueOptions: this.store.findAll('venue')
    });
  },
  actions:{
    save: function(race){
      race.save().then(() => {
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

