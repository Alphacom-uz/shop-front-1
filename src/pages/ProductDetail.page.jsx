import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Dialog, IconButton } from "@mui/material";
import Layout from "../components/layout/Layout.component";
import Slider from "react-slick"; // react-slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn'; // Import zoom icon

// Example slider images
const images = [
  'https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png',
  'https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg',
  'https://img.freepik.com/premium-photo/red-1969-dodge-challenger_62972-59481.jpg',
  'https://img.freepik.com/premium-photo/sports-muscle-car-walpapers_862994-454227.jpg?w=360',
];

// Additional product information
const productDetails = {
  image: 'https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png', // Image to display below product details
  description: `This product is a high-quality car that provides excellent performance and comfort. 
  It is suitable for both city driving and long journeys. Features include a powerful engine, modern technology, 
  and a spacious interior that ensures a pleasant driving experience.`,
};

const ProductDetailPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Index of the selected image

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(0);
  };

  return (
    <Layout>
      <Grid container spacing={2}>
        {/* Left side: Product image slider */}
        <Grid item xs={12} md={6}>
          <Box>
            <Slider {...sliderSettings}>
              {images.map((imgSrc, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex !important",
                    alignItems: "center",
                    justifyContent: "center",
                    position: 'relative', // Position relative for icon placement
                    background: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${imgSrc}) no-repeat center center`,
                    backgroundSize: 'cover',
                    height: '400px',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Product image ${index + 1}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                  {/* Zoom icon placed in the top right corner */}
                  <IconButton
                    onClick={handleOpen}
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      color: 'white',
                      zIndex: 1,
                    }}
                  >
                    <ZoomInIcon />
                  </IconButton>
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>

        {/* Right side: Product details */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4">Product Name</Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              {productDetails.description}
            </Typography>
            <Typography variant="h5">Price: $100</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Location: New York, USA
            </Typography>
            {/* Add to Cart Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate voluptatibus minus fugiat soluta hic eum nisi sint recusandae itaque dolores temporibus aliquam nemo tempora nulla eligendi autem facere, ullam sit maxime iure quam. Officia tempore quaerat quibusdam similique magni recusandae laborum nulla nisi iusto excepturi libero nihil, ea quae! Itaque officia dolorum repellendus aliquid harum laborum ad, ipsum nisi accusantium ab nemo sunt, <br /><br /> sequi perspiciatis deleniti debitis nobis fugit! Recusandae, ipsum? Quisquam fuga voluptate quam sunt eaque et, minus omnis ullam sed aliquid iste repellendus dolor delectus incidunt ad deleniti porro totam alias odio illum asperiores pariatur? Voluptatibus, debitis. Modi quaerat quidem eveniet nostrum blanditiis molestias quos impedit maiores commodi officia. Ducimus blanditiis dolor ipsam ex error dolorem odio dignissimos id ullam eum aut modi necessitatibus assumenda commodi, quia est non et fugiat voluptatem? Numquam repudiandae recusandae explicabo, ea modi qui? Earum temporibus, delectus voluptates harum ullam <br /><br /> autem possimus at qui? Provident aliquam quisquam molestias veritatis dolores nisi architecto quam voluptatum incidunt similique impedit veniam aperiam at xcepturi commodi nobis repudiandae animi numquam corrupti eos inventore debitis, quaerat facere alias nesciunt quia! Aliquam aliquid quaerat quia eius dolore
      </Box>

      <Box sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
        <img
          src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cccfb1c-cd16-4d3a-aa13-f172485bd737/dh6fo8d-9a8d8f35-fce1-4dc8-ad97-fedf2bca4dca.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjY2NmYjFjLWNkMTYtNGQzYS1hYTEzLWYxNzI0ODViZDczN1wvZGg2Zm84ZC05YThkOGYzNS1mY2UxLTRkYzgtYWQ5Ny1mZWRmMmJjYTRkY2EuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMVLetv_lLb2k-zNLCn75q274NKClQUyAmKU3LLFrtM"}
          alt="Product Detail"
          style={{
            width: '100%',
            height: '500px',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Additional product information below the right side */}
      <Box sx={{ mt: 4, gap: "20px", display: 'flex', alignItems: 'center' }}>
        <img
          src={"https://img.freepik.com/premium-photo/car-illustration-illustrator_890746-29145.jpg"}
          alt="Product Detail"
          style={{
            width: '50%',
            height: '500px',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ width: "50%", }}>
          <Typography variant="h6">About this Product</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate voluptatibus minus fugiat soluta hic eum nisi sint recusandae itaque dolores temporibus aliquam nemo tempora nulla eligendi autem facere, ullam sit maxime iure quam. Officia tempore quaerat quibusdam similique magni recusandae laborum nulla nisi iusto excepturi libero nihil, ea quae! Itaque officia dolorum repellendus aliquid harum laborum ad, ipsum nisi accusantium ab nemo sunt, <br /><br /> sequi perspiciatis deleniti debitis nobis fugit! Recusandae, ipsum? Quisquam fuga voluptate quam sunt eaque et, minus omnis ullam sed aliquid iste repellendus dolor delectus incidunt ad deleniti porro totam alias odio illum asperiores pariatur? Voluptatibus, debitis. Modi quaerat quidem eveniet nostrum blanditiis molestias quos impedit maiores commodi officia. Ducimus blanditiis dolor ipsam ex error dolorem odio dignissimos id ullam eum aut modi necessitatibus assumenda commodi, quia est non et fugiat voluptatem? Numquam repudiandae recusandae explicabo, ea modi qui? Earum temporibus, delectus voluptates harum ullam <br /><br /> autem possimus at qui? Provident aliquam quisquam molestias veritatis dolores nisi architecto quam voluptatum incidunt similique impedit veniam aperiam at xcepturi commodi nobis repudiandae animi numquam corrupti eos inventore debitis, quaerat facere alias nesciunt quia! Aliquam aliquid quaerat quia eius dolore
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4, gap: "20px", display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: "50%", }}>
          <Typography variant="h6">About this Product</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate voluptatibus minus fugiat soluta hic eum nisi sint recusandae itaque dolores temporibus aliquam nemo tempora nulla eligendi autem facere, ullam sit maxime iure quam. Officia tempore quaerat quibusdam similique magni recusandae laborum nulla nisi iusto excepturi libero nihil, ea quae! Itaque officia dolorum repellendus aliquid harum laborum ad, ipsum nisi accusantium ab nemo sunt, <br /><br /> sequi perspiciatis deleniti debitis nobis fugit! Recusandae, ipsum? Quisquam fuga voluptate quam sunt eaque et, minus omnis ullam sed aliquid iste repellendus dolor delectus incidunt ad deleniti porro totam alias odio illum asperiores pariatur? Voluptatibus, debitis. Modi quaerat quidem eveniet nostrum blanditiis molestias quos impedit maiores commodi officia. Ducimus blanditiis dolor ipsam ex error dolorem odio dignissimos id ullam eum aut modi necessitatibus assumenda commodi, quia est non et fugiat voluptatem? Numquam repudiandae recusandae explicabo, ea modi qui? Earum temporibus, delectus voluptates harum ullam <br /><br /> autem possimus at qui? Provident aliquam quisquam molestias veritatis dolores nisi architecto quam voluptatum incidunt similique impedit veniam aperiam at xcepturi commodi nobis repudiandae animi numquam corrupti eos inventore debitis, quaerat facere alias nesciunt quia! Aliquam aliquid quaerat quia eius dolore
          </Typography>
        </Box>
        <img
          src={"https://img.freepik.com/premium-photo/car-illustration-illustrator_890746-29145.jpg"}
          alt="Product Detail"
          style={{
            width: '50%',
            height: '500px',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{ mt: 4, gap: "20px", display: 'flex', alignItems: 'center' }}>
        <img
          src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cccfb1c-cd16-4d3a-aa13-f172485bd737/dhh9oww-d373a3a8-0f2b-40f7-bbd5-94d199c475ae.jpg/v1/fill/w_1280,h_732,q_75,strp/cyberpunk_off_road_muscle_car_by_roadkill205_dhh9oww-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvM2NjY2ZiMWMtY2QxNi00ZDNhLWFhMTMtZjE3MjQ4NWJkNzM3XC9kaGg5b3d3LWQzNzNhM2E4LTBmMmItNDBmNy1iYmQ1LTk0ZDE5OWM0NzVhZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.96wfv8-z1mCzhDh3jbbF45ygPUlwAffKEK4TU2-oThI"}
          alt="Product Detail"
          style={{
            width: '50%',
            height: '500px',
            objectFit: 'cover',
          }}
        />
        <img
          src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cccfb1c-cd16-4d3a-aa13-f172485bd737/dhh9pmp-77741297-5e98-4043-bf6a-08a2bea729f6.jpg/v1/fill/w_1280,h_732,q_75,strp/1970s_off_road_muscle_car_by_roadkill205_dhh9pmp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvM2NjY2ZiMWMtY2QxNi00ZDNhLWFhMTMtZjE3MjQ4NWJkNzM3XC9kaGg5cG1wLTc3NzQxMjk3LTVlOTgtNDA0My1iZjZhLTA4YTJiZWE3MjlmNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ThqvrpiTDTRF5L4UI2lAphY2nY_8YBXUFZmz-p96Fdk"}
          alt="Product Detail"
          style={{
            width: '50%',
            height: '500px',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Modal to display enlarged image with slider */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        {/* Close button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Slider
          {...sliderSettings}
          initialSlide={selectedImageIndex} // Show the image that was clicked
        >
          {images.map((imgSrc, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "transparent",
              }}
            >
              <img
                src={imgSrc}
                alt={`Enlarged product ${index + 1}`}
                style={{
                  width: '100%',
                  height: '70vh', // Image height set to 70vh
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Dialog>
    </Layout>
  );
};

export default ProductDetailPage;
