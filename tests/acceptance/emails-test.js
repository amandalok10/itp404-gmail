import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('inbox displays emails', async function(assert) {
    server.create('post', {
          from: 'email 1',
          to: 'email 1',
          subject: 'email 1',
          message: 'email 1',
          starred: true
        });
        server.create('post', {
              from: 'email 2',
              to: 'email 2',
              subject: 'email 2',
              message: 'email 2',
              starred: true
            });
            server.create('post', {
                  from: 'email 3',
                  to: 'email 3',
                  subject: 'email 3',
                  message: 'email 3',
                  starred: false
                });
                server.create('post', {
                      from: 'email 4',
                      to: 'email 4',
                      subject: 'email 4',
                      message: 'email 4',
                      starred: false
                    });
                    server.create('post', {
                          from: 'email 5',
                          to: 'email 5',
                          subject: 'email 5',
                          message: 'email 5',
                          starred: false
                        });
    await visit('/');
     assert.dom('[data-test="email"]').exists({ count: 5 });
     assert.dom('[data-test="starred"]').exists({ count: 2 });
     assert.dom('[data-test="notStarred"]').exists({ count: 3 });

    assert.equal(currentURL(), '/');
  });

  test('view single email', async function(assert) {
    server.create('post', {
      from: 'View email',
      to: 'View email',
      subject: 'View email',
      message: 'View email',
      starred: false
    });

    await visit('/');
   assert.dom('[data-test="from"]').exists({ count:1 });
    assert.dom('[data-test="to"]').exists({ count:1 });
     assert.dom('[data-test="subject"]').exists({ count:1 });
      assert.dom('[data-test="message"]').exists({ count:1 });


  });

  test('delete single email', async function(assert) {
    server.create('post', {
          from: 'email 4',
          to: 'email 4',
          subject: 'email 4',
          message: 'email 4',
          starred: false
        });
        server.create('post', {
              from: 'email 5',
              to: 'email 5',
              subject: 'email 5',
              message: 'email 5',
              starred: false
            });
await visit('/email/1');

await click('[data-test="delete"]');

assert.equal(currentURL(), '/');
assert.dom('[data-test="email"]').exists({ count: 1 });

  });

  test('create single email', async function(assert) {
    await visit('/email/new');
    await fillIn('#from', 'From test');
    await fillIn('#to', 'To test');
    await fillIn('#subject', 'Subject test');
    await click('[data-test="send"]');

assert.equal(currentURL(), '/');
assert.dom('[data-test="notStarred"]').exists({ count: 1 });
  });



});
