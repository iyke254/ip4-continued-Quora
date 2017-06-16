import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer',true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        reply: this.get('reply'),
        questions: this.get('questions')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
