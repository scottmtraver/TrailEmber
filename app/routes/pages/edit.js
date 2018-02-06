import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return Ember.RSVP.hash({
      page: this.store.find('page', params.page_id)
    });
  },
  actions:{
    save: function(page){
      this.get('model').save().then(() => {
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

