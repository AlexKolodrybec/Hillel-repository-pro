import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'background.paper' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 Колодрубець Олександр. Контакти: alex.kolodrybec@gmail.com
      </Typography>
    </Box>
  );
}

export default Footer;