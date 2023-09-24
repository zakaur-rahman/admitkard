import {
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import {
    defaultCountries,
    FlagEmoji,
    parseCountry,
    usePhoneInput,
  } from "react-international-phone";
  
  export const MuiPhone = ({ value, onChange, ...restProps }) => {
    const { phone, handlePhoneValueChange, inputRef, country, setCountry } =
      usePhoneInput({
        defaultCountry: "in",
        value,
        countries: defaultCountries,
        onChange: (data) => {
          onChange(data.phone);
        },
      });
  
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };
  
    return (
      <TextField
        variant="outlined"
        label="Enter Contact Number"
        color="primary"
        placeholder="Phone number"
        value={phone}
        onChange={handlePhoneValueChange}
        type="tel"
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginRight: "2px", marginLeft: "-8px" }}
            >
              <Select
                MenuProps={{
                  style: {
                    height: "300px",
                    width: "360px",
                    top: "10px",
                    left: "-34px",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                }}
                sx={{
                  width: "max-content",
                  fieldset: {
                    display: "none",
                  },
                  '&.Mui-focused:has(div[aria-expanded="false"])': {
                    fieldset: {
                      display: "block",
                    },
                  },
                  ".MuiSelect-select": {
                    padding: "8px",
                    paddingRight: "24px !important",
                  },
                  svg: {
                    right: 0,
                  },
                }}
                value={country}
                onChange={handleCountryChange}
                renderValue={(value) => (
                  <FlagEmoji iso2={value} style={{ display: "flex", height: "25px"}} />
                )}
              >
                {defaultCountries.map((c) => {
                  const country = parseCountry(c);
                  return (
                    <MenuItem key={country.iso2} value={country.iso2}>
                      <FlagEmoji
                        iso2={country.iso2}
                        style={{ marginRight: "8px", height: "25px" }}
                      />
                      <Typography marginRight="8px">{country.name}</Typography>
                      <Typography color="gray">+{country.dialCode}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          ),
        }}
        {...restProps}
      />
    );
  };
  
  export default MuiPhone;
  