import React from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent, Avatar , Icon
} from '@mui/material';
import { LocalShipping, Refresh, HelpOutline } from '@mui/icons-material';


const teamMembers = [
  {
    name: 'Gaurav Bisht',
    role: 'Frontend Developer',
    img: '/images/person_3.jpg',
    desc: 'As a Frontend Developer, Gaurav is responsible for creating dynamic and responsive user interfaces, ensuring a seamless and engaging user experience.'
  },
  {
    name: 'Faizan Rahman Khan',
    role: 'UX Engineer',
    img: '/images/person_4.jpg',
    desc: 'Faizan specializes in UX design, focusing on improving the usability, accessibility, and overall user experience of web applications through design thinking and testing.'
  }
 
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Box 
  sx={{
    height: {
      xs: '70vh', // smaller height on phones
      sm: '80vh',
      md: '90vh',
      lg: '100vh',
    },
    backgroundImage: 'url(/images/hero_1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
      }}
      >
        <Box sx={{ color: 'white', p: 3, borderRadius: 2, textAlign: 'center' }}>
          <Typography  variant="h2"
      fontWeight={700}
      sx={{ mt: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}
 >About Us</Typography>
          <Typography>We are dedicated to providing high-quality pharmaceutical products that cater to the health and wellness .</Typography>
        </Box>
      </Box>

      <Container sx={{    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
 py: 8 }}>
        {/* How We Started */}
        <Grid container spacing={4} alignItems="center" sx={{ display: 'flex', flexWrap: { xs: 'wrap', sm: 'nowrap', md: 'nowrap' } }}>
  <Grid item xs={12} sm={6} md={6}>
    <img src="/images/bg_1.jpg" alt="How We Started" style={{ width: '100%', borderRadius: 8 }} />
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
    <Typography variant="h4" gutterBottom>How We Started</Typography>
    <Typography paragraph>We started with a simple yet powerful vision – to provide reliable and affordable pharmaceutical products that improve the health and well-being of individuals across India. </Typography>
    <Typography paragraph>Our journey began with a deep commitment to ensure that everyone, regardless of their background or location, has access to high-quality medicines and healthcare solutions. </Typography>
  </Grid>
</Grid>


        {/* Trusted Company */}
        <Grid container spacing={4} alignItems="center" sx={{ display: 'flex', flexWrap: { xs: 'wrap', sm: 'nowrap', md: 'nowrap' } }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>We Are Trusted Company</Typography>
            <Typography paragraph>we are committed to building trust with our customers. With years of experience in the pharmaceutical industry, we have earned a reputation for delivering high-quality, safe, and effective products.</Typography>
            <Typography paragraph>Our dedication to transparency, integrity, and customer satisfaction has made us a trusted name in the healthcare sector. We carefully source and test all our products to ensure they meet the highest standards, so you can rely on us for your health and well-being needs. </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/images/hero_1.jpg" alt="Trusted Company" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
        </Grid>

        {/* Feature Cards */}
     
<Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
  {[
 {
  title: 'Free Shipping',
  desc: 'Enjoy free shipping on all orders, ensuring your products arrive at your doorstep without any extra cost.',
  icon: <LocalShipping color="primary" />
},
{
  title: 'Free Returns',
  desc: 'If you’re not satisfied with your purchase, return it for free within a specified period for a full refund.',
  icon: <Refresh color="primary" />
},
{
  title: 'Customer Support',
  desc: 'Our dedicated customer support team is available to assist you with any inquiries or issues you may have.',
  icon: <HelpOutline color="primary" />
}  ].map((feature, index) => (
    <Grid key={index} item xs={12} md={4}>
      <Card sx={{ textAlign: 'center', py: 3 }}>
        <CardContent>
          {/* Display Icon with primary color */}
          <div style={{ fontSize: 40, marginBottom: 16 }}>
            {feature.icon}
          </div>
          <Typography variant="h5">{feature.title}</Typography>
          <Typography variant="body2">{feature.desc}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        {/* Team Section */}
        
<Box sx={{ textAlign: 'center', mt: 10, mb: 4 }}>
  <Typography  variant="h2"
      fontWeight={700}
      sx={{ mt: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}
 >The Team</Typography>
</Box>

<Grid container spacing={4}   
 sx={{
  display: 'flex',
  flexWrap: {
    xs: 'wrap',  // wrap on screens <=600px
    sm: 'nowrap' // nowrap on screens >600px
  }
}}
  
  >
    {teamMembers.map((member, index) => (
      <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            p: 3,
          }}
        >
          <Avatar
            src={member.img}
            alt={member.name}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h6">{member.name}</Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {member.role}
          </Typography>
          <Typography variant="body2">{member.desc}</Typography>
        </Card>
      </Grid>
    ))}
  </Grid>

      </Container>
    </>
  );
};

export default About;
