import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Styles from './Main.module.scss';

function Main(params) {
	return (
		<main className={Styles.main}>
			<Link to="/characters">
				<Button
					variant="outlined" 
					color="primary"
				>
					Start
				</Button>
			</Link>
		</main>
	);
}

export default Main;