import Cookie from 'ember-simple-auth/session-stores/cookie';

export default Cookie.extend({
  cookieName: 'my-apps-session-cookie'
});