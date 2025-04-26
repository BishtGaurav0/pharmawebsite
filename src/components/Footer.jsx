import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.100', py: 5, mt: 4 }}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
        >
          {/* About Us - Fixed Width Only on 1000px+ */}
          <Grid
            item
            xs={12}
            sx={{
              '@media (min-width:1000px)': {
                width: '300px',
                flexGrow: 0,
                flexShrink: 0,
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
            We are dedicated to providing high-quality, reliable, and affordable pharmaceutical products that prioritize your health and well-being. With years of expertise in the industry, we strive to empower individuals to take charge of their health with confidence.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              {['Supplements', 'Vitamins', 'Diet & Nutrition', 'Tea & Coffee'].map((item) => (
                <li key={item}>
                  <Typography
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{ textDecoration: 'none', color: 'inherit', display: 'block', mb: 0.5 }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
  <Typography variant="h6" gutterBottom>
    Contact Info
  </Typography>
  <Typography variant="body2">
    <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    203 Fake Street, Sector 15, Rohini, Delhi-110085, India
  </Typography>
  <Typography variant="body2">
    <PhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    +91 9245679330
  </Typography>
  <Typography variant="body2">
    <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    qwer123@example.com
  </Typography>
</Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} All rights reserved | Made with ❤️ by Group 25
           
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
