import { useDispatch, useSelector } from "react-redux";
import Styles from "./CharacterData.module.scss";
import HomeIcon from "../HomeIcon/HomeIcon";
import { setCharacterData, setFetchStatus } from "../../redux/actions";
import { useEffect } from "react";

function CharacterData(props) {

	const dispatch = useDispatch();
	const characterData = useSelector(state => state.characterData);

	function onClickHandler() {
		dispatch(setCharacterData(false));
	}

	const requiredKeys = [
		'name',
		'gender',
		'birth_year',
		'homeworld',
		'vehicles',
		'starships'
	];

	useEffect(() => {
		dispatch(setFetchStatus(true));
		
	}, [dispatch]);
	
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
						return <div className={Styles.person} key={index}>{characterData[key]}</div>
					})
			}
		</div>
	);
}

export default CharacterData;