import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText } from '@mui/material';

function SwapiPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <Container>
      <List>
        {characters.map((character, index) => (
          <ListItem key={index}>
            <ListItemText primary={character.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default SwapiPage;