import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';
import DS from 'ember-data';

export default Controller.extend({
  errors: DS.Errors.create(),
  actions: {



    createPost(event) {

      event.preventDefault();

      let post = this.store.createRecord('post', {
        name: this.name,
        date: this.date,
        location: this.location,
        contact: this.contact,
      });
//if(this.validate()){
      post.save().then(() => {
         this.transitionToRoute('index');
        //this.transitionToRoute('post', post.id);
      });

  },

  validate() {
    this.set('errors', DS.Errors.create());

    if (this.get('post.name') === '' || this.get('post.name') === undefined) {
      this.get('errors').add('name', "empty no")
    }

    return this.get('errors.isEmpty');
  },




    saveEvent(){
      return new RSVP.Promise((resolve) => {
        later(() => {
          resolve();

        }, 2000);

      });

    }
  }
});
