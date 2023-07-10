import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const CustomPaper = styled(Paper)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0
}) as typeof Paper;