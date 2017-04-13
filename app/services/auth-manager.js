import Ember from 'ember';

export default Ember.Service.extend({
  accessToken: null,
  isAuthenticated: Ember.computed.bool('accessToken')
});
