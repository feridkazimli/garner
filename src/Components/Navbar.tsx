import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function Navbar() {
    return (
        <Stack sx={{ display: 'block', pb: '24px' }}>
            <Box display='flex' alignItems='center' >
                <img width='35px' height='35px' src='/assets/images/logo.png' alt="logo" />
                <Typography variant='h5' color='#E44232' pl='.8rem' fontWeight='700'>garner</Typography>
            </Box>
        </Stack>
    );
}
export default Navbar;
