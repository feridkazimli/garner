import {
    Box,
    TextField,
    Stack,
    Typography
} from "@mui/material";
import CustomButton from "../../Components/Elements/CustomButton";

const FormSide = () => {
    return (
        <>
            <Box component="hr" sx={{ my: "10px", color: "#fff" }} />

            <Stack spacing={2} direction="column">
                <TextField label="Email" placeholder="Enter your email..." />
                <TextField
                    label="Password"
                    placeholder="Enter your password..."
                />
                {/* Button Componenet  */}
                <CustomButton text='Sign Up With Email' />

                <Box mt="10px">
                    <Typography
                        component="p"
                        sx={{
                            color: "rgba(0,0,0,0.88)",
                            fontSize: "14px",
                            lineHeight: 1.2,
                        }}
                    >
                        By continuing with Google, Apple, or Email, you agree to
                        Todoist’s{" "}
                        <a href="#terms" className="link-color">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#terms" className="link-color">
                            Privacy Policy.
                        </a>
                    </Typography>
                </Box>

                <Box component="hr" sx={{ my: "10px", color: "#fff" }} />

                <Box mt="10px">
                    <Typography
                        component="p"
                        sx={{
                            color: "rgba(0,0,0,0.88)",
                            fontSize: "14px",
                            lineHeight: 1.2,
                            textAlign: "center",
                        }}
                    >
                        Already signed up?{" "}
                        <a href="#login" className="link-color">
                            Go to login
                        </a>
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}

export default FormSide