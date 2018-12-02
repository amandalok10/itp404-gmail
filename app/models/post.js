import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
  name: DS.attr('string'),
  date: DS.attr('string'),
  location: DS.attr('string'),
  contact: DS.attr('string')
=======
  subject: DS.attr('string'),
  message: DS.attr('string'),
  to: DS.attr('string'),
  from: DS.attr('string'),
  starred: DS.attr('boolean'),
  notStarred: DS.attr('boolean')
>>>>>>> 3f878518d8adca51d33eadd534f46429c2320f51
});
