import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('name', '');
    controller.set('date', '');
    controller.set('location', '');
    controller.set('contact', '');
  }
});
