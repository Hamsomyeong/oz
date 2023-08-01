import { LOGIN_USER } from "../_actions/types";
import { REGISTER_USER } from "../_actions/types";

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    // break;
    // ... : spread operater : 특정 객체, 배열의 값을 각각 새로운 객체와 배열에 복제하는 코드
    // parameter의 state ={}을 동일하게 복제
    case REGISTER_USER:
      return { ...state, register: action.payload };
    // break;

    default:
      return state;
  }
}
