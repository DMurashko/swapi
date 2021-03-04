import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Main.scss';

function Main(params) {
	return (
		<main>
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