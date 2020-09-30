import { saveQuestion } from '../utils/api';
import { addQuestionForUser } from '../actions/users';

export const RECEIVED_QUESTIONS = 'RECEIVED_QUESTIONS';
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return   {
    type: RECEIVED_QUESTIONS,
    questions
  };
}



function addQuestion(question) {
  return   {
    type: ADD_QUESTION,
    question
  };
}

export function addAnswerToQuestion(authUser, qid, answer) {
  return   {
    type: ADD_ANSWER_QUESTION,
    authUser,
    qid,
    answer
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch =>   {
    return saveQuestion (       { 
         optionOneText, optionTwoText, author 
    }).then(question => {
            dispatch(addQuestion(question));
            dispatch(addQuestionForUser(question));
          }
        );
  };
}
