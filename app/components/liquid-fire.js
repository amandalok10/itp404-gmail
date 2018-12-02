import Component from '@ember/component';

export default Component.extend({
  toggle: false,
  click(){
    this.toggleProperty('toggle');
  }
});
