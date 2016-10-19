import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('sponsor', params.sponsor_id);
  },
  actions:{
    save: function(sponsor){
      sponsor.save().then(() => {
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
