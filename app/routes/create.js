import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('subject', '');
    controller.set('message', '');
    controller.set('to', '');
    controller.set('from', '');
  }
});
