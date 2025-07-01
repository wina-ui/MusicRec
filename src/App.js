import * as React from 'react';
import Layout from './Layout.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useState } from "react";

export default function App() {
  const [song, setSong] = useState("");

  const handleChange = (e) => {
    setSong(e.target.value);
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '70vh',
            textAlign: 'center',
            gap: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            What’s a song you like?
          </Typography>

          <TextField
            label="Song Title"
            variant="outlined"
            value={song}
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </Container>
    </Layout>
  );
}
