import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', { path: '/email/:id' });
  this.route('create', { path: '/email/new' });
  this.route('edit', { path: '/email/:id/edit' });
  this.route('trash');
  this.route('sent');
});

export default Router;
