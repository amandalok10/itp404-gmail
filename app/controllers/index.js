import Controller from '@ember/controller';

export default Controller.extend({
    starred: true,
      actions: {
          star(post, newValue) {
            post.set('starred', newValue);
          },
    deletePost(post) {
      let confirmed = window.confirm(
        'Are you sure you want to delete this email?'
      );

      if (confirmed) {
        post.destroyRecord().then(() => {
          this.transitionToRoute('index');
        });
      }
    }


  }
});
