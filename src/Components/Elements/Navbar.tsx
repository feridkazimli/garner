import {  Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const   Navbar = ()=> {
    return (
<Link to="/" className='forlogolink'>
<Stack sx={{ display: 'block', pb: '24px' }}>
            <Box display='flex' alignItems='center' >
                <img width='35px' height='35px' src='/assets/images/logo.png' alt="logo" />
                <Typography variant='h5' color='#E44232' pl='.8rem' fontWeight='700'>garner</Typography>
            </Box>
        </Stack>
</Link>
    );
}
export default Navbar;