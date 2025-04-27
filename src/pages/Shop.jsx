import React, { useContext, useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Paper,
  Stack,
} from "@mui/material";
import BottomBanner from "../components/BottomBanner";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products, loading, error } = useContext(ProductContext);

  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    setPage(1);
  };

  // Extract unique categories from products
  const categories = useMemo(() => {
    const categorySet = new Set();
    products.forEach((product) => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });
    return Array.from(categorySet);
  }, [products]);

  // Determine if any filter is active
  const isFilterActive =
    selectedCategory !== "" || priceRange[0] > 0 || priceRange[1] < 500;

  // Filter products
  const filteredProducts = isFilterActive
    ? products.filter((product) => {
        const matchCategory = selectedCategory
          ? product.category === selectedCategory
          : true;
        const matchPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchCategory && matchPrice;
      })
    : products;

  const startIndex = (page - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Store
        </Typography>

        {loading ? (
          <Typography align="center" sx={{ my: 4 }}>
            Loading...
          </Typography>
        ) : error ? (
          <Typography color="error" align="center" sx={{ my: 4 }}>
            {error}
          </Typography>
        ) : (
          <Grid
            container
            spacing={4}
            sx={{
              flexDirection: "column",
              width: "93%",
              gap: 3,
            }}
          >
            {/* Filters */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 3, width: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  Filters
                </Typography>
                <Stack spacing={4}>
                  {/* Category Filter */}
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      label="Category"
                    >
                      <MenuItem value="">All</MenuItem>
                      {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Price Range Filter */}
                  <Box>
                    <Typography gutterBottom>Price Range</Typography>
                    <Slider
                      value={priceRange}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={500}
                    />
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            {/* Product List */}
            <Grid item xs={12} md={9}>
              <Grid container spacing={4}>
                {selectedProducts.length > 0 ? (
                  selectedProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                      <Card sx={{ textAlign: "center" }}>
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt={product.name}
                          sx={{ p: 2, height: 240, objectFit: "contain" }}
                        />
                        <CardContent>
                          <Typography variant="h6">{product.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.original ? (
                              <>
                                <del>${product.original}</del> — $
                                {product.price}
                              </>
                            ) : (
                              `$${product.price}`
                            )}
                          </Typography>
                          <Link
                            to={`/product/${product.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1 }}
                            >
                              View Details
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography sx={{ mt: 4, ml: 2 }}>
                    No products match your filters.
                  </Typography>
                )}
              </Grid>

              {/* Pagination */}
              {filteredProducts.length > itemsPerPage && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Pagination
                    count={Math.ceil(filteredProducts.length / itemsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    shape="rounded"
                    color="primary"
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        )}
      </Container>

      <BottomBanner />
    </>
  );
};

export default Shop;
