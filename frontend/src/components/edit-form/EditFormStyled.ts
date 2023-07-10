import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const CustomButton = styled(Button)({
  background: "#039be5",
  textTransform: "none",
  marginLeft: '8px',
  marginTop: '-4px',
  "&:hover": {
    background: "#0288d1"
  }
}) as typeof Button;

export const CustomBox = styled(`div`)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  "&:hover": {
    background: "transparent"
  },
  "@media (max-width:767px)": {
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'center',
    "& > div, & > input, & > button": {
      width: '90%'
    },
    "& > button": {
      marginLeft: '0'
    }
  },
  marginBottom: '5px'
}) as typeof Box;