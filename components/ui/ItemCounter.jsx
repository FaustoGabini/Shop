import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export const ItemCounter = ({ currentValue, updateQuantity, maxValue }) => {
  const addOrRemove = (value) => {
    if (currentValue === 1 && value === -1) {
      return;
    }

    if (currentValue === maxValue && value === 1) {
      return;
    }

    if (value === 1) {
      updateQuantity(currentValue + 1);
    } else {
      updateQuantity(currentValue - 1);
    }
  };

  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <IconButton onClick={() => addOrRemove(-1)}>
          <RemoveCircleOutline />
        </IconButton>
        <Typography sx={{ width: 40, textAlign: "center" }}>
          {currentValue}
        </Typography>
        <IconButton onClick={() => addOrRemove(+1)}>
          <AddCircleOutline />
        </IconButton>
      </Box>
    </>
  );
};
