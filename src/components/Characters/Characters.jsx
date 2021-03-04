import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllPeople, fetchGetAllPeople } from "../../redux/actions";
import HomeIcon from "../HomeIcon/HomeIcon";
import Person from "../Person/Person";
import PopUp from "../PopUp/PopUp";
import Styles from "./Characters.module.scss";

function Characters() {
	const dispatch = useDispatch();
	const fetchStatus = useSelector(state => state.fetchStatus);
	const popUpStatus = useSelector(state => state.popUpStatus);
	const poppedUpPerson = useSelector(state => state.poppedUpPerson);
	const people = useSelector(state => state.people);
	const [height, setHeight] = useState(window.innerHeight);
	const style ={
		height: height,
	}

	function _onResize() {
		setHeight(window.innerHeight);
	}

	useEffect(() => {
		dispatch(fetchGetAllPeople());
		return () => {
			dispatch(deleteAllPeople());
		}
	}, [dispatch]);

	useEffect(() => {
		console.log('Component did mount');
		window.addEventListener('resize', _onResize);

		return () => {
			console.log('Component did unmount');
			window.removeEventListener('resize', _onResize);
		}
	}, []);

	return (
		<div style={style} className={Styles.list}>

			<HomeIcon class={Styles.icon} />

			{!fetchStatus ? 
				people.map((person, index) => {
					return <Person name={person.name} key={index} />
				})
			: null}
			
			{!fetchStatus &&
			popUpStatus &&
			poppedUpPerson ?
				<PopUp />
			: null}
		</div>
	);
}

export default Characters;