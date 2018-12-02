import Component from '@ember/component';
import DS from 'ember-data';
import Ember from 'ember';

//import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend( {
  // validate: {
  //     form: {
  //       // The form property we should be evaluating here is name
  //       name: {
  //         required: true,
  //         format: 'word',
  //         // Your defined basic default error message
  //         message: 'Name error',
  //         // A more specific message tailored to the 'required' test
  //         requiredMessage: 'You must enter a name'
  //       },
  //       location: {
  //         required: true,
  //         format: 'word',
  //         message: 'Age error'
  //       },
  //
  //     }
  //   },


  tagName: 'button',
  buttonText: 'Submit',

  click(){

      this.set('buttonText', 'Submitting...');
      this.onClick().then(() => {
        this.set('buttonText', 'Submit');
      })
    }








});
