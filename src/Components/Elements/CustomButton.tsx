import { Button, Typography } from '@mui/material'
type fortext ={
    text:string
}
const CustomButton = ({ text } :fortext) => {
    return (
        <Button variant="contained" color="error" sx={{ p: "12px",margin:"10px 0px" }} fullWidth>
            <Typography variant="h6" fontSize={"16px"} fontWeight="700">
                {text}
            </Typography>
        </Button>
    )
}

export default CustomButton;
