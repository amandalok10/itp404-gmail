import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;
   }
  // name() {
  //   return faker.internet.email();
  // },
  // date() {
  //   return faker.internet.email();
  // },
  // location() {
  //   return faker.company.catchPhrase();
  // },
  // contact() {
  //   return faker.lorem.paragraphs();
  // }
});
