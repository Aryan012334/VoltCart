import * as React from 'react';
import { Avatar, Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import brandConfig from '../config/brand';

const features = [
  {
    icon: <DevicesRoundedIcon fontSize="large" />,
    title: 'Explore electronics',
    description: 'Browse phones, computers, smart-home products, and everyday accessories in one storefront.',
  },
  {
    icon: <SearchRoundedIcon fontSize="large" />,
    title: 'Find the right fit',
    description: 'Search the catalog, compare product details, and discover related items.',
  },
  {
    icon: <ShoppingBagOutlinedIcon fontSize="large" />,
    title: 'Shop with ease',
    description: 'Keep a cart across visits, review your order, and follow the checkout flow.',
  },
];

function About() {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 3, md: 6 },
          mb: 5,
          p: { xs: 4, md: 8 },
          borderRadius: { xs: 4, md: 6 },
          color: 'common.white',
          overflow: 'hidden',
          position: 'relative',
          background:
            'radial-gradient(circle at 85% 10%, rgba(22,184,166,0.34), transparent 32%), linear-gradient(130deg, #0c1b38 0%, #12366b 65%, #155eef 100%)',
        }}
      >
        <Stack spacing={3} alignItems="flex-start" sx={{ maxWidth: 760 }}>
          <Chip
            icon={<BoltRoundedIcon sx={{ color: '#B9F227 !important' }} />}
            label="About VoltCart"
            sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em' }}>
            Good tech.
            <br />
            Easier to find.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 620, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8 }}>
            VoltCart is an electronics storefront built to make browsing, comparing, and shopping for everyday technology feel straightforward.
          </Typography>
          <Button
            href={brandConfig.links.repository}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<GitHubIcon />}
            sx={{ color: '#0c1b38', bgcolor: '#B9F227', '&:hover': { bgcolor: '#a9df16' } }}
          >
            View the project
          </Button>
        </Stack>
      </Paper>

      <Grid container spacing={2.5}>
        {features.map(feature => (
          <Grid item xs={12} md={4} key={feature.title}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 3.5 }, border: '1px solid', borderColor: 'divider', borderRadius: 4, height: '100%' }}>
              <Stack spacing={2}>
                <Avatar sx={{ width: 52, height: 52, bgcolor: 'primary.main', color: 'common.white' }}>{feature.icon}</Avatar>
                <Typography variant="h6" fontWeight={750}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {feature.description}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          mt: 3,
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2.5,
        }}
      >
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'secondary.main', color: 'common.white', fontWeight: 800 }}>A</Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" color="primary.main" fontWeight={700}>
            Project maintainer
          </Typography>
          <Typography variant="h5" fontWeight={750}>
            {brandConfig.developer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Building and maintaining VoltCart.
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Button href={brandConfig.links.github} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />} variant="outlined">
            GitHub
          </Button>
          <Button href={brandConfig.links.linkedin} target="_blank" rel="noopener noreferrer" startIcon={<LinkedInIcon />} variant="outlined">
            LinkedIn
          </Button>
          <Button href={`mailto:${brandConfig.links.email}`} startIcon={<EmailIcon />} variant="outlined">
            Email
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default About;
