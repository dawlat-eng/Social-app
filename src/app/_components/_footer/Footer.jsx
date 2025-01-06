import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        position: 'fixed', // Fixes the footer at the bottom
        bottom: 0, // Positions it at the bottom of the viewport
        left: 0,
        right: 0,
        backgroundColor: '#1976D2', // Background color set to #1976D2
        color: 'white', // Ensure text is visible on the blue background
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2024 Social App. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
