import { savedQuestionAnswer } from '../utils/api';
import { addAnswerToQuestion } from '../actions/questions';

export const RECEIVED_USERS = 'RECEIVED_USERS';
export const ADD_ANSWER_FOR_USER = 'ADD_ANSWER_FOR_USER';
export const ADD_QUESTION_FOR_USER = 'ADD_QUESTION_FOR_USER';

export function receiveUsers(users){
  return  {
    type: RECEIVED_USERS,
    users
  };
}

function addAnswerToUser(authUser, qid, answer) {
  return   {   
    type: ADD_ANSWER_FOR_USER,
    authUser,
    qid,
    answer
  };
}

export function handleSavedQuestionAnswer(authUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    return savedQuestionAnswer(authUser, qid, answer).catch(e =>{
      console.warn('Error : handleSavedQuestionAnswer:', e);
    });
  };
}

export function addQuestionForUser({ id, author }) {
  return   {
    type: ADD_QUESTION_FOR_USER,
    id,
    author
  };
}
