// Prototypal Inheritance in Js
function LeetcodeQuestion(title,level,topic,sol) {
      this.questionName = title;
      this.questionLevel = level;
      this.questionTopic = topic;
      this.solution = sol;
}

LeetcodeQuestion.prototype.showSolution = function() {
      return this.solution;
}

LeetcodeQuestion.prototype.getQuestionName = function() {
      return this.questionName;
}

LeetcodeQuestion.prototype.getQuestionLevel = function() {
      return this.questionLevel;
}

LeetcodeQuestion.prototype.getQuestionTopic = function() {
      return this.getQuestionTopic;
}

// class is just a syntactical sugar in JS
class Question {
      constructor(name,topic) {
            this.name = name;
            this.topic = topic;
      }

      getName() {
            return this.name;
      }

      getTopic() {
            return this.topic;
      }
}