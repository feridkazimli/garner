import { Button, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { CustomTextFieldProps } from "../../types";

export const CustomTextField = ({
  label,
  name,
  error,
  type,
  autoComplete,
  register,
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
        error={error}
        label={`${label}`}
        name={`${name}`}
        {...register(name)}
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
