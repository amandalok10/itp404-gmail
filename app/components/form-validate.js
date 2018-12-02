import Component from '@ember/component';
import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend(formValidation, {
  buttonWords: 'hi',
  validate: {
      form: {
        // The form property we should be evaluating here is name
        name: {
          required: true,
          format: 'word',
          // Your defined basic default error message
          message: 'Name error',
          // A more specific message tailored to the 'required' test
          requiredMessage: 'You must enter a name'
        },
        location: {
          required: true,
          format: 'word',
          message: 'Age error'
        },

      }
    },


  click() {
    // This will actually call the validation function
    this.send('validate_form_action');
  }



});
