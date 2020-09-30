import {
  RECEIVED_USERS,
  ADD_ANSWER_FOR_USER,
  ADD_QUESTION_FOR_USER
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER_FOR_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    case ADD_QUESTION_FOR_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      };
    default:
      return state;
  }
}
