import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { InputHTMLAttributes } from "react";
import { Control, useController } from "react-hook-form";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  id: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  defaultValue?: any;
}

export function InputField({
  name,
  control,
  label,
  disabled,
  id,
  startAdornment,
  endAdornment,
  defaultValue,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref, name: fieldName },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl
      sx={{ width: "40%" }}
      variant="outlined"
      error={invalid}
      size="medium"
      margin="dense"
      disabled={disabled}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        fullWidth
        value={value}
        name={fieldName}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        inputRef={ref}
        inputProps={inputProps}
        defaultValue={defaultValue}
      />
      <FormHelperText id="component-error-text">
        {error?.message}
      </FormHelperText>
    </FormControl>
  );
}
