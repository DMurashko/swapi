import { useDispatch, useSelector } from "react-redux";
import Styles from "./CharacterData.module.scss";
import HomeIcon from "../HomeIcon/HomeIcon";
import { deleteFetchedData, fetchAdditionalUserData, setCharacterData } from "../../redux/actions";
import { useEffect } from "react";

function CharacterData(props) {

	const dispatch = useDispatch();
	const characterData = useSelector(state => state.characterData);
	const fetchStatus = useSelector(state => state.fetchStatus);
	const fetchedPlanet = useSelector(state => state.fetchedPlanet);
	const fetchedStarships = useSelector(state => state.fetchedStarships);
	const fetchedVehicles = useSelector(state => state.fetchedVehicles);

	function onClickHandler() {
		dispatch(setCharacterData(false));
	}

	function toTitleCase(str) {
		return str.replace(
			/\w\S*/g,
			function(txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}
		);
	}

	const requiredKeys = [
		'name',
		'gender',
		'birth_year',
	];

	useEffect(() => {
		dispatch(fetchAdditionalUserData(characterData));
		return () => {
			dispatch(setCharacterData(false));
			dispatch(deleteFetchedData());
		}
	}, [dispatch, characterData]);
	
	return (
		<div className={Styles.main}>
			<HomeIcon class={Styles.icon} onClick={onClickHandler} />

			{
				requiredKeys
					.filter(key => {
						if (characterData[key] instanceof Array)
							return characterData[key] && characterData[key].length;
						return characterData[key];
					})
					.map((key, index) => {
						return <div className={Styles.person} key={index}>{toTitleCase(key)} : {characterData[key]}</div>
					})
			}

			{
				!fetchStatus &&
				fetchedPlanet ?
					fetchedPlanet.map((key, index) => {
						return <div className={Styles.person} key={index}>Planet: {key}</div>
					})
				:null
			}

			{
				!fetchStatus &&
				fetchedStarships ?
					fetchedStarships.map((key, index) => {
						return <div className={Styles.person} key={index}>Starship: {key}</div>
					})
				:null
			}

			{
				!fetchStatus &&
				fetchedVehicles ?
					fetchedVehicles.map((key, index) => {
						return <div className={Styles.person} key={index}>Vehicle: {key}</div>
					})
				:null
			}
		</div>
	);
}

export default CharacterData;