import { FC, useState, useRef } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
} from "@mui/material";
import { CustomPaper } from './FooterStyled';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

const Footer: FC = () => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | any>(null);

  return (
    <Box
      sx={{ pb: 7 }}
         ref={ref}
    >
      <CssBaseline />
      <CustomPaper elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </CustomPaper>
    </Box>
  );
}

export default Footer;
