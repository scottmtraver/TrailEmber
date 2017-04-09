import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      card: this.store.find('card', params.card_id)
    });
  },
  actions:{
    save: function(card){
      card.save().then(() => {
        this.transitionTo('cards');
      });
    },
    cancel: function(){
      this.transitionTo('cards');
    },
    willTransition() {
      this.controller.get('model.card').rollbackAttributes();
    }
  }
});

