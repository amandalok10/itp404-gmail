import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', { path: '/event/:id' });
  this.route('create', { path: '/event/new' });
  this.route('edit', { path: '/event/:id/edit' });
  this.route('map');
  this.route('about');
});

export default Router;
