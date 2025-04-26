import React, { useContext } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';

import {
  Box, Typography, Container, Grid, Button,
  Card, CardMedia, CardContent, Paper, Avatar
} from '@mui/material'
import BottomBanner from '../components/BottomBanner'
import { ProductContext } from '../context/ProductContext'

const testimonials = [
  { 
    id: 1, 
    name: 'Priya Verma', 
    image: '/images/person_1.jpg', 
    text: 'This product is amazing! I had a great experience using it. I would highly recommend it to everyone.' 
  },
  { 
    id: 2, 
    name: 'Arnav Sharma', 
    image: '/images/person_2.jpg', 
    text: 'It’s very useful and affordable. I am really happy with the results I’ve seen.' 
  },
  { 
    id: 3, 
    name: 'Rohan Patel', 
    image: '/images/person_3.jpg', 
    text: 'I purchased this product and it completely met my expectations. Fantastic!' 
  }, 

]

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 }
    },
  ],
}

const Home = () => {
  const { products, loading } = useContext(ProductContext)

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '70vh', sm: '80vh', md: '90vh', lg: '100vh' },
          backgroundImage: 'url(/images/hero_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 3, sm: 4, md: 6 },
            borderRadius: 2,
            textAlign: 'center',
            mx: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
            Effective Medicine, New Medicine Everyday
          </Typography>
          <Typography variant="h2" fontWeight={700} sx={{ mt: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}>
            Welcome To Pharma
          </Typography>
          <Button
  component={Link}
  to="/shop"
  variant="contained"
  color="primary"
  size="large"
  sx={{ mt: 3, px: 4, py: 1.5 }}
>
  Shop Now
</Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Container disableGutters maxWidth={false} sx={{ mt: '-100px', py: '5em', maxWidth: 'fit-content', mx: 'auto', px: { xs: 2, sm: 4 } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{
            mt: { xs: 0, sm: '-80px', md: '-50px', lg: '-40px' },
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-evenly' },
            flexWrap: 'wrap',
            gap: { xs: '3rem', sm: '5rem', md: '5rem', lg: '7rem' },
          }}
        >
          {/* Feature Cards */}
          {[
            { title: "Free Shipping", color: "#51EAEA" , data :'Enjoy free shipping on all orders!'},
            { title: "Season Sale 50% Off", color: "#74d12b", data :"50% off  all orders available for 2hour!" },
            { title: "Buy A Gift Card", color: "#ffc107" , data:"Collect 50 point and get a Gift card"},
          ].map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                elevation={3}
                sx={{
                  bgcolor: feature.color,
                  color: 'white',
                  p: { xs: 2, sm: 3, md: 4, lg: 5 },
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: { xs: 180, sm: 200, md: 220 },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>
                   <strong> {feature.data  } </strong>
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popular Products */}
      <Container sx={{ py: 6 }}>
  <Typography variant="h4" textAlign="center" gutterBottom>
    Popular Products
  </Typography>

  {loading ? (
    <Typography align="center" sx={{ my: 4 }}>Loading...</Typography>
  ) : (
    <Grid container spacing={4} justifyContent="center">
      {products.slice(0, 8).map(product => (   // Only take first 8 items
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ p: 2, height: 240, objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="text.secondary">
                {product.price ? `$${product.price}` : 'No Price'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )}

  <Box textAlign="center" mt={5}>
    <Button variant="contained" size="large" href="/shop">
      View All Products
    </Button>
  </Box>
</Container>
      {/* Testimonials */}
      <Box sx={{ bgcolor: '#f7f7f7', py: { xs: 4, sm: 6, md: 8 } }}>
        <Container>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Testimonials
          </Typography>

          <Slider {...sliderSettings}>
            {testimonials.map(({ id, name, image, text }) => (
              <Box
                key={id}
                sx={{
                  px: { xs: 2, sm: 4 },
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: { xs: 4, sm: 5 },
                }}
              >
                <Paper
                  sx={{
                    p: { xs: 3, sm: 4 },
                    textAlign: 'center',
                    maxWidth: { xs: '100%', sm: 600 },
                    mx: 'auto',
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <Avatar src={image} alt={name} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                  <Typography variant="body1" sx={{ mb: 2 }}>"{text}"</Typography>
                  <Typography variant="subtitle1">— {name}</Typography>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>

      {/* Bottom Banners */}
      <BottomBanner />
    </>
  )
}

export default Home
