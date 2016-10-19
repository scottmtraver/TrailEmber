import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('venue', params.venue_id);
  },
  actions:{
    save: function(venue){
      venue.save().then(() => {
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

