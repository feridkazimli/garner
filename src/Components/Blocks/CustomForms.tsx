import { Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";

const CustomForms = ({ leftSide, text, rightSide }: any) => {
    return (
        <Grid container pt="2rem" mt="32px" pb="2rem">
            {/* Left Grid  */}
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
                <Box py="32px">
                    <Typography variant="h4" fontWeight="bold">
                        {/* Page Text  */}
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

export default CustomForms;
