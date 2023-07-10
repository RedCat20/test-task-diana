import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


export const CustomListItem = styled(`div`)({
  display: 'grid',
  alignItems: 'center',
  minHeight: '60px',
  height: 'auto',
  gridTemplateColumns: 'auto 1fr 1fr auto auto',
  "&:hover": {
    background: "transparent"
  },
  "@media (max-width:767px)": {
    gridTemplateColumns: 'repeat(25%, 4)',
    rowGap: '16px'
  },
  marginBottom: '5px'
}) as typeof ListItem;


export const CustomListItemText = styled(ListItemText)({
  fontSize: '13px',
  "&:hover": {
    background: "transparent",
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  "@media (max-width:767px)": {
    gridTemplateColumns: 'repeat(25%, 4)',
    rowGap: '16px'
  },
  marginBottom: '5px'
}) as typeof ListItemText;


export const CustomLinkTypography = styled(`span`)({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  alignItems: 'center',
  fontSize: '13px',
  color: 'gray',
  "@media (max-width:575px)": {
    "& > div": {
      display: 'none'
    },
    "& > button": {
      padding: 0
    },
    "& > svg": {
      display: 'none'
    },
  },

  "& > svg": {
    marginTop: '2px',
    width: '20px',
  },
  "&:hover": {
    cursor: 'pointer',
    textDecoration: 'underline',
    background: 'transparent'
  }
}) as typeof ListItem;