import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  message: DS.attr('string'),
  to: DS.attr('string'),
  from: DS.attr('string')
});
