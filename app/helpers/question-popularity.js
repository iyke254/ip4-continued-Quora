import Ember from 'ember';

export function questionsPopularity(params) {
  var questions = params[0];

  if(questions.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(questionsPopularity);
