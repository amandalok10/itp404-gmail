import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);


    test('star is empty when false', async function(assert) {

    await render(hbs`<StarButton
    @starred={{false}} />`);

    assert.dom('.starActivate').exists({ count: 1 });

      });

  test('star is filled when true', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StarButton
    @starred={{true}} />`);

    assert.dom('.starActivate').exists({ count: 1 });


  });


});
