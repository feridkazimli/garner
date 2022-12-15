import {
    Box,
    Grid,
    Container
} from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar";


const CustomForms = ({ leftSide, text, rightSide }) => {

    return (
        <Box minHeight={"max-content"} p={"32px"}>
            <Container
                maxWidth="md"
                sx={{ height: "100vh" }}
                className="app"
                disableGutters
            >
                <Navbar />
                <Grid container pt="2rem" mt="32px" pb="2rem">
                    {/* Left Grid  */}
                    <Grid item xs={12} md={6}
                        sx={{
                            display: {
                                xs: 'grid',
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
                                {text}
                            </Typography>
                        </Box>

                        <Stack
                            spacing={2}
                            direction="column"
                            maxWidth="350px"
                            textAlign="center"
                        >
                            {leftSide}
                        </Stack>
                    </Grid>

                    {/* Right Grid  */}
                    <Grid item md={6} alignItems='center' sx={{
                        display: {
                            xs: 'none',
                            md: 'grid'
                        }
                    }}>
                        {rightSide}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomForms;