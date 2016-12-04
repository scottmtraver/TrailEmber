import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error: function() {
      this.transitionTo('/login');
      return false;
    }
  }

});
