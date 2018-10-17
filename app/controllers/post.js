import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteEmail(post) {
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
