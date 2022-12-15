import { Button, Typography } from '@mui/material'

const CustomButton = ({ text }) => {
    return (
        <Button variant="contained" color="error" sx={{ p: "12px" }}>
            <Typography variant="h6" fontSize={"16px"} fontWeight="700">
                {text}
            </Typography>
        </Button>
    )
}

export default CustomButton
