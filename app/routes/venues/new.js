import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('venue');
  },
  actions:{
    save: function(newVenue){
      newVenue.save().then(() => {
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

