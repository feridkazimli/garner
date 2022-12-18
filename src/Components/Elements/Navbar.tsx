import { CardMedia } from '@mui/material';
import { Container } from '@mui/system';
import { GlobalStyless } from '../../Styles/MainStyle';
const Navbar = ()=> {
    return (
    <Container> 
        <CardMedia 
         component="img"
         src='/assets/images/logo.png'
         sx={GlobalStyless.forlogo}
         />
    </Container>
    );
}   
export default Navbar;
