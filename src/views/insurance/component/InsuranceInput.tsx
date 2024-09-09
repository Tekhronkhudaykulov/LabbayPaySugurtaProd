import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import "./index.scss";

export const SelectInsurance = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <p className="mb-[15px] text-[26px] font-[700]">
        Степень родства к владельцу авто:
      </p>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        sx={{ ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" } }}
        className="!h-[90px] !text-[30px] !bg-white !outline-none !rounded-[20px] !border-none"
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export const InsuranceDate = ({ onFocus, value, ref }: any) => {
  return (
    <div>
      <p className="mb-[15px] text-[26px] font-[700]">Дата рождения</p>
      <input
        type="text"
        className="bg-white outline-none p-[20px] h-[90px] text-[30px] w-full rounded-[20px]"
        placeholder="DD.MM.YYYY"
        value={value}
        ref={ref}
        onFocus={onFocus}
      />
    </div>
  );
};

export const InsuranceSeria = ({ onFocus, value, ref }: any) => {
  return (
    <div>
      <p className="mb-[15px] text-[26px] font-[700]">
        Серия паспорта/ID-card:
      </p>
      <input
        type="text"
        className="bg-white outline-none p-[20px] h-[90px] text-[30px] w-full rounded-[20px]"
        placeholder="AA"
        value={value}
        ref={ref}
        onFocus={onFocus}
      />
    </div>
  );
};

export const InsuranceId = ({ onFocus, value, ref }: any) => {
  return (
    <div>
      <p className="mb-[15px] text-[26px] font-[700]">
        Номер паспорта/ID-card:
      </p>
      <input
        type="text"
        className="bg-white outline-none p-[20px] h-[90px] text-[30px] w-full rounded-[20px]"
        placeholder="0 0 0 0 0 0 1"
        value={value}
        ref={ref}
        onFocus={onFocus}
      />
    </div>
  );
};
