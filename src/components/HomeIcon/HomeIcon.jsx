import { Link } from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {

	return (
		<div className={props.class}>
			<Link to='/'>
				<SvgIcon style={{ 
					color: '#BB86FC',
					'fontSize': 40
				}} >
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
				</SvgIcon>
			</Link>
		</div>
	);
}

export default HomeIcon;