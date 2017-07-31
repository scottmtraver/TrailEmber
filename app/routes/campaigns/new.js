import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('campaign');
  },
  actions:{
    save: function(newCampaign){
      newCampaign.save().then(() => {
        this.transitionTo('campaigns');
      });
    },
    cancel: function(){
      this.transitionTo('campaigns');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
