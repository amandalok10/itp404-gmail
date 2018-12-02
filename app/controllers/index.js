import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost(post) {
      let confirmed = window.confirm(
        'Are you sure you want to delete this event?'
      );

      if (confirmed) {
        post.destroyRecord().then(() => {
          this.transitionToRoute('index');
        });
      }
    }


  }
});
