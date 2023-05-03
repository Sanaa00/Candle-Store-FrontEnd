import React, { useState } from "react";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };
  const color = ["75 ml", "120 ml", "190 ml"];
  return (
    <div className="lg:w-96 ">
      <FormControl>
        <RadioGroup
          name="color"
          aria-labelledby="color"
          onChange={handleChange}
          value={selectedValue}
          row
        >
          {color.map((radio, index) => {
            return (
              <span key={color[index]}>
                <FormControlLabel
                  control={<Radio color="success" />}
                  label={radio}
                  value={radio}
                />
              </span>
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioButtons;
