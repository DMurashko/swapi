import { 
	FETCH_STATUS,
	ADD_PERSON,
	POP_UP_STATUS,
	SET_POP_UP_PERSON,
	SET_CHARACTER_DATA,
	DELETE_ALL_PEOPLE
} from './types';
import axios from "axios";

export function setFetchStatus(status) {
	return {
		type: FETCH_STATUS,
		payload: status
	}
}

export function deleteAllPeople() {
	return {
		type: DELETE_ALL_PEOPLE
	}
}

export function addPerson(person) {
	if (person) {

		return {
			type: ADD_PERSON,
			payload: person
		}

	} else {
		console.log('invalid entries');
	}
}

export function addPeople(people) {
	return async (dispatch) => {
		try {
			if (people && people.length) {
				for (let person of people) {
					dispatch(addPerson(person));
				}
			} else {
				console.log('invalid entries');
			}
		} catch(e) {
			console.log(e);
		}
	}
}

export function fetchGetAllPeople() {
	return async (dispatch) => {
		try {
			await dispatch(setFetchStatus(true));
			axios.get('https://swapi.dev/api/people/')
				.then(response => {
					console.log(response.data.results);
					dispatch(addPeople(response.data.results));
					dispatch(setFetchStatus(false));
				});
		} catch(e) {
			console.log(e);
		}
	}
}

//fetching additional information

export function fetchPlanet() {
	return async (dispatch) => {
		try {
			await dispatch(setFetchStatus(true));
			axios.get('https://swapi.dev/api/people/')
				.then(response => {
					console.log(response.data.results);
					dispatch(addPeople(response.data.results));
					dispatch(setFetchStatus(false));
				});
		} catch(e) {
			console.log(e);
		}
	}
}

//starship

//vehicle

//pop-up actions

export function setPopUpStatus(status) {
	return {
		type: POP_UP_STATUS,
		payload: status
	}
}

export function setPopUpPerson(person) {
	return {
		type: SET_POP_UP_PERSON,
		payload: person
	}
}

export function setCharacterData(person) {
	return {
		type: SET_CHARACTER_DATA,
		payload: person
	}
}