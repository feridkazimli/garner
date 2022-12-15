import { Box, CardMedia, Typography } from "@mui/material"

const ImageSide = () => {
    return (
        <Box position='relative' width='100%'>
            <CardMedia component="img" image="/assets/images/regimg.png" ></CardMedia>
            <Box width='280px' p='24px' position='absolute' top='280px' left='200px' borderRadius='8px' bgcolor='#fff' boxShadow='0 3px 20px rgba(0,0,0,.15);'>
                <Typography>Before Todoist, my to-do lists were scattered all around! Now, everything is in order and in one place.</Typography>
                <Typography component='p' sx={{
                    color: 'gray',
                    pt: "15px",
                    fontSize: '15px'
                }}>– Matt M.</Typography>
            </Box>
        </Box>
    )
}

export default ImageSide