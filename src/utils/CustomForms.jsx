import {
    Box,
    Grid,
} from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";

const CustomForms = () => {

    return (
        <Grid container pt="2rem" mt="32px" pb="2rem">
            {/* Left Grid  */}
            <Grid item xs={12} md={6}
                sx={{
                    display: {
                        xs: 'flex',
                        md: 'block'
                    },
                    justifyContent: {
                        xs: 'center',
                        md: 'start'
                    }
                }}>
                <Box py="32px">
                    <Typography variant="h4" fontWeight="bold">
                        {/* Page Text  */}
                    </Typography>
                </Box>

                <Stack
                    spacing={2}
                    direction="column"
                    maxWidth="350px"
                    textAlign="center"
                >
                </Stack>
            </Grid>

            {/* Right Grid  */}
            <Grid item md={6} alignItems='center' sx={{
                display: {
                    xs: 'none',
                    md: 'grid'
                }
            }}>
                {/* {Right Component } */}
            </Grid>
        </Grid>
    );
};

export default CustomForms;
