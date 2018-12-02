import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);


  test('star is filled when true', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StarButton
    @starred={{true}}
    @onClick={{star}} />`);

    assert.dom('[data-test="testStarred"]').exists({ count: 1 });
  });

  test('star is not filled when false', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StarButton
    @starred={{false}}
    @onClick={{star}} />`);

    assert.dom('[data-test="testNotStarred"]').exists({ count: 1});

});
});
