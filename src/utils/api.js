import {
  _getUsers,
  _getQuestions,
  _savedQuestion,
  _savedQuestionAnswer
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveQuestion(question) {
  return _savedQuestion(question);
}

export function savedQuestionAnswer(authUser, qid, answer) {
  // console.log('info', { authUser, qid, answer });
  return _savedQuestionAnswer({ authUser, qid, answer });
}
