import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('campaign', params.campaign_id);
  },
  actions:{
    save: function(campaign){
      campaign.save().then(() => {
        this.transitionTo('campaigns');
      });
    },
    setInactive: function(campaign){
      campaign.set('isActive', false);
      campaign.save().then(() => {
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
