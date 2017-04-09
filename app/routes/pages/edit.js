import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      page: this.store.find('page', params.page_id)
    });
  },
  actions:{
    save: function(page){
      page.save().then(() => {
        this.transitionTo('pages');
      });
    },
    cancel: function(){
      this.transitionTo('pages');
    },
    willTransition() {
      this.controller.get('model.page').rollbackAttributes();
    }
  }
});

