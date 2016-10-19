import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('race', params.race_id);
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
      this.controller.get('model').rollbackAttributes();
    }
  }
});

