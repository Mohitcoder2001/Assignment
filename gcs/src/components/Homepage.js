import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const MenuButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Icon = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  marginLeft: 'auto',
}));

const Homepage = () => {
  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Title variant="h6">
            GCS Dashboard
          </Title>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Mission Planning</Button>
          <Button color="inherit">Fleet Management</Button>
          <Button color="inherit">Real-time Monitoring</Button>
          <Button color="inherit">Data Analysis</Button>
          <AvatarStyled>U</AvatarStyled>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the GCS Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <PaperStyled>
                <LiveTvIcon fontSize="large" />
                <Typography variant="h6">Live Feed</Typography>
                <Typography variant="body1">View real-time drone footage.</Typography>
              </PaperStyled>
            </Grid>
            <Grid item xs={12} sm={4}>
              <PaperStyled>
                <FlightTakeoffIcon fontSize="large" />
                <Typography variant="h6">New Mission</Typography>
                <Typography variant="body1">Plan and create a new mission.</Typography>
              </PaperStyled>
            </Grid>
            <Grid item xs={12} sm={4}>
              <PaperStyled>
                <AssignmentIcon fontSize="large" />
                <Typography variant="h6">Recent Missions</Typography>
                <Typography variant="body1">View recent mission summaries.</Typography>
              </PaperStyled>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Root>
  );
};

export default Homepage;
