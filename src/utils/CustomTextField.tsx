import { Button, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
type CustomTextFieldProps = {
  id: string;
  label: string;
  name: string;
  autoComplete: string;
  type: string;
  placeholder: string;
};

export const CustomTextField = ({
  id,
  label,
  name,
  type,
  autoComplete,
  placeholder,
}: CustomTextFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((user) => !user);
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id={`${id}`}
        label={`${label}`}
        name={`${name}`}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        autoComplete={`${autoComplete}`}
        autoFocus
        placeholder={`${placeholder}`}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* look at there soon */}
              {type === "password" ? (
                <Button type="button" onClick={handleClickShowPassword}>
                  {showPassword ? (
                    <Visibility color="action" />
                  ) : (
                    <VisibilityOff color="action" />
                  )}
                </Button>
              ) : (
                ""
              )}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
