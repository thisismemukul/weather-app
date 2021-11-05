import React from 'react';
import { Box, Container } from '@mui/material/';
import CardMain from './Components/CardMain';
const Home = () => {
  
    return (
        <>
            <Container maxWidth="sm">
                <Box>
                    <CardMain />
                </Box>
            </Container>
        </>
    )
}

export default Home;
