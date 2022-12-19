import { Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";

const CustomContainer = ({ leftSide, text, rightSide }: any) => {
    return (
        <Grid container pt="2rem" mt="32px" pb="2rem">
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: {
                        xs: "grid",
                        md: "block",
                    },
                    justifyContent: {
                        xs: "center",
                        md: "start",
                    },
                }}
            >
                <Box pt="32px" pb='20px'>
                    <Typography variant="h4" fontSize='32px' fontWeight="bold" maxWidth='70%' lineHeight='1.2'>
                        {text}
                    </Typography>
                </Box>

                <Stack spacing={2} direction="column" textAlign="center">
                    {leftSide}
                </Stack>
            </Grid>
            {/* Right Grid  */}
            <Grid
                item
                md={6}
                alignItems="center"
                sx={{
                    display: {
                        xs: "none",
                        md: "grid",
                    },
                }}
            >
                {rightSide}
            </Grid>
        </Grid>
    );
};

export default CustomContainer;
