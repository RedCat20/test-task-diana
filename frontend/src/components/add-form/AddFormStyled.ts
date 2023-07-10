import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)({
  background: "#039be5",
  textTransform: "none",
  marginLeft: '8px',
  marginTop: '-4px',
  "&:hover": {
    background: "#0288d1"
  }
}) as typeof Button;