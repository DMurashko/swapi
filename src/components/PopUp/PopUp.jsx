import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { 
	setPopUpPerson, 
	setPopUpStatus,
	setCharacterData
} from "../../redux/actions";
import Styles from "./PopUp.module.scss";

function PopUp() {

	const poppedUpPerson = useSelector(state => state.poppedUpPerson);
	const dispatch = useDispatch();
	const ref = useRef();

	function onClickHandler() {
		dispatch(setCharacterData(poppedUpPerson));
		dispatch(setPopUpStatus(false));
		dispatch(setPopUpPerson(false));
	}

	function onClickOutside(e) {
		if (ref.current && !ref.current.contains(e.target)) {
			dispatch(setPopUpPerson(false));
			dispatch(setPopUpStatus(false));
		}
	}

	useEffect(() => {
		document.addEventListener("click", onClickOutside);
	
		return () => {
			document.removeEventListener("click", onClickOutside);
		};
	});

	return (
		<div className={Styles.container} ref={ref}>
			<div className={Styles.item}>Name: {poppedUpPerson.name}</div>
			<div className={Styles.item}>Gender: {poppedUpPerson.gender}</div>
			<div className={Styles.item}>Birth year: {poppedUpPerson.birth_year}</div>
			<Link 
				to={{
					pathname: '/character_data',
					query: {
						poppedUpPerson,
					}
				}} 
				onClick={onClickHandler}
				className={Styles.item}
			>
				More information!
			</Link>
		</div>
	);

}

export default PopUp;