import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('truncate text to num of characters', async function(assert) {
    this.set('inputValue', '12345678');
    this.set('numOfChar', 8);

    await render(hbs`{{truncate-text inputValue numOfChar}}`);

    assert.equal(this.element.textContent.trim(), '12345678');
  });

  test('dont truncate text if too short', async function(assert) {
    this.set('inputValue', '1234');
    this.set('numOfChar', 5);

    await render(hbs`{{truncate-text inputValue numOfChar}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });
});
