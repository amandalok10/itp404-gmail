import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event) {
      event.preventDefault();

      let post = this.store.createRecord('post', {
        subject: this.subject,
        message: this.message,
        to: this.to,
        from: this.from,
      });

      post.save().then(() => {
         this.transitionToRoute('index');
        //this.transitionToRoute('post', post.id);
      });
    }
  }
});
