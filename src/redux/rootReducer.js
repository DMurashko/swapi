import { 
	FETCH_STATUS,
	ADD_PERSON,
	POP_UP_STATUS,
	SET_POP_UP_PERSON,
	SET_CHARACTER_DATA
} from "./types";

const initialState = {
	people: [],

	fetchStatus: false,

	popUpStatus: false,

	poppedUpPerson: false,

	characterData: false
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON:
			return { ...state, people: state.people.concat([action.payload]) };
		case POP_UP_STATUS:
			return { ...state, popUpStatus: action.payload };
		case SET_POP_UP_PERSON:
			return { ...state, poppedUpPerson: action.payload };
		case SET_CHARACTER_DATA:
			return { ...state, characterData: action.payload };
		case FETCH_STATUS:
			return { ...state, fetchStatus: action.payload };
		default: return state
	}
}

export default rootReducer;