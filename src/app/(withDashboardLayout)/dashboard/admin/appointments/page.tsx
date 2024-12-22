"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { boolean } from "zod";

const AppointmentsPage = () => {
  const [filter, setFilter] = useState({});
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: "01",
      name: "name",
      label: "name",
      isShow: true,
    },
    {
      id: "02",
      name: "location",
      label: "Location",
      isShow: true,
    },
    {
      id: "03",
      name: "country",
      label: "Country",
      isShow: true,
    },
    {
      id: "04",
      name: "release",
      label: "Release",
      isShow: false,
    },
    {
      id: "05",
      name: "date",
      label: "Date",
      isShow: false,
    },
  ]);

  useEffect(() => {
    const tempFilter: { [key: string]: boolean } = {};
    if (checkBoxes.length) {
      for (const checkBox of checkBoxes) {
        tempFilter[checkBox?.name] = checkBox?.isShow;
      }
      setFilter(tempFilter);
    }
  }, [checkBoxes]);

  useEffect(() => {
    let allChecked = true;
    if (checkBoxes?.length) {
      for (const checkBox of checkBoxes) {
        if (!filter[checkBox?.name]) {
          allChecked = false;
          break;
        }
      }
      setIsAllChecked(allChecked);
    }
  }, [filter, checkBoxes]);

  const handleCheckbox = (name, value) => {
    setFilter((state) => {
      console.log(state);
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleAllChecked = (value) => {
    const tempFilter = {};
    for (const checkBox of checkBoxes) {
      tempFilter[checkBox?.name] = value;
    }
    setFilter(tempFilter);
  };

  const handleClear = () => {
    setFilter({});
  };

  console.log(filter);
  return (
    <Box>
      <Typography>This is Appointments Page</Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 4,
        }}
      >
        <input
          onChange={(e) => handleAllChecked(e.target.checked)}
          checked={isAllChecked}
          type="checkbox"
          name=""
          id="all"
        />
        <label htmlFor="all">All</label>
      </Box>

      {checkBoxes?.map((item) => (
        <Box
          key={item?.id}
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <input
            onChange={(e) => handleCheckbox(item?.name, e.target.checked)}
            type="checkbox"
            name=""
            id={item?.id}
            checked={!!filter[item.name]}
          />
          <label htmlFor={item?.id}>{item?.label}</label>
        </Box>
      ))}

      <Stack direction="row" gap={4} mt={4}>
        <Button onClick={() => handleClear()}>clear</Button>
        <Button>apply</Button>
      </Stack>
    </Box>
  );
};

export default AppointmentsPage;
