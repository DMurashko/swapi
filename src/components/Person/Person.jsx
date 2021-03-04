import Styles from "./Person.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPopUpPerson, setPopUpStatus } from "../../redux/actions";

function Person(props) {

	const dispatch = useDispatch();
	const people = useSelector(state => state.people);

	function onClickHandler() {
		const person = people.find(person => person.name === props.name);
		dispatch(setPopUpPerson(person));
		dispatch(setPopUpStatus(true));
	}

	return (
		<div className={Styles.person} onClick={onClickHandler}>
			{props.name}
		</div>
	);

}

export default Person;