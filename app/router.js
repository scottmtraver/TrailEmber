import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('races', function() {
    this.route('new');
    this.route('edit', {
      path: ':race_id/edit'
    });
  });
  this.route('sponsors', function() {
    this.route('new');
    this.route('edit', {
      path: ':sponsor_id/edit'
    });
  });
  this.route('venues', function() {
    this.route('new');
    this.route('edit', {
      path: ':venue_id/edit'
    });
  });
  this.route('login');
  this.route('cards', function() {
    this.route('new');
    this.route('edit', {
      path: ':card_id/edit'
    });
  });
});

export default Router;
