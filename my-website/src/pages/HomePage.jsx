import React from 'react';
import { Container, Typography } from '@mui/material';

function HomePage() {
  return (
    <Container>
      <Typography variant="h4">Колодрубець Олександр</Typography>
      <Typography variant="h6">Front-end розробник</Typography>
      <Typography paragraph>
        Я розробник із знаннями React, Node.js, JavaScript тощо.
      </Typography>
      <Typography variant="h6">Навички</Typography>
      <Typography paragraph>
        JavaScript, React, Node.js, Git
      </Typography>
    </Container>
  );
}

export default HomePage;