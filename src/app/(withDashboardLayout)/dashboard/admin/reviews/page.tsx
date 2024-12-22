"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ReviewsPage = () => {
  const [filter, setFilter] = useState({});
  const [allChecked, setAllChecked] = useState(false);
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
    if (checkBoxes?.length) {
      const tmpFilter: { [key: string]: boolean } = {};

      for (const checkBox of checkBoxes) {
        tmpFilter[checkBox.name] = checkBox.isShow;
      }

      setFilter(tmpFilter);
    }
  }, [checkBoxes]);

  useEffect(() => {
    if (checkBoxes?.length) {
      let allChecked = true;
      for (const checkbox of checkBoxes) {
        if (!filter[checkbox.name]) {
          allChecked = false;
          break;
        }
      }
      setAllChecked(allChecked);
    }
  }, [filter, checkBoxes]);

  const handleApply = () => {
    console.log("Apply Button is Clicked");
  };
  const handleClear = () => {
    setFilter({});
  };

  const handleCheckAll = (value: boolean) => {
    const tmpFilter: { [key: string]: boolean } = {};

    for (const checkBox of checkBoxes) {
      tmpFilter[checkBox.name] = value;
    }

    setFilter(tmpFilter);
  };

  const handleInputChange = (name: string, value: boolean) => {
    setFilter((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography mb={5}>This is Reviews Page</Typography>
      <Box mt={1} sx={{ display: "flex", gap: 1 }}>
        <input
          type="checkbox"
          checked={!!allChecked}
          onChange={(e) => {
            handleCheckAll(e.target.checked);
          }}
          name=""
          id="all"
        />
        <label htmlFor="all">all</label>
      </Box>
      {checkBoxes?.map((item) => (
        <Box mt={1} key={item?.id} sx={{ display: "flex", gap: 1 }}>
          <input
            onChange={(e) => handleInputChange(item?.name, e.target.checked)}
            type="checkbox"
            checked={!!filter[item.name]}
            name=""
            id={item.id}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </Box>
      ))}
      <Stack direction="row" gap={2} mt={4}>
        <Button
          sx={{
            bgcolor: "transparent",
            boxShadow: "none",
            border: "1px solid gray",
            color: "gray",
          }}
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button onClick={handleApply}>Apply</Button>
      </Stack>
    </Box>
  );
};

export default ReviewsPage;

// const obj = {
//   name: true,
//   date: true,
//   location: true,
//   country: true,
//   release: false,
// };
