import { Box, Button } from "@mui/material";

export const SizeSelector = ({ selectedSize, sizes, onSelectSize }) => {
  return (
    <Box>
      {sizes.map((size) => {
        return (
          <Button
            key={size}
            size="small"
            color={selectedSize === size ? "primary" : "info"}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </Button>
        );
      })}
    </Box>
  );
};
