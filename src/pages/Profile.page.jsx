import React, { useState } from 'react';
import { Container, Box, Tab, Tabs, TextField, Button, Avatar, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Orders from '../components/orders/Orders';
import Layout from '../components/layout/Layout.component';

const ProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [userInfo, setUserInfo] = useState({
    avatar: '',
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1990-01-01',
    email: 'johndoe@example.com',
    phone: '+123 456 7890'
  });
  const [isEdited, setIsEdited] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
    setIsEdited(true);
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUserInfo((prevInfo) => ({ ...prevInfo, avatar: reader.result }));
      setIsEdited(true); // Avatar o‘zgartirilganda "Saqlash" tugmasini faollashtirish
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    console.log('Maʼlumotlar saqlandi:', userInfo);
    setIsEdited(false);
  };

  return (
    <Layout>
      <Container maxWidth="md" sx={{ mt: 5, display: 'flex' }}>
        <Box sx={{ borderRight: 1, borderColor: 'divider', width: '25%' }}>
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Profile Tabs"
            sx={{ '.MuiTab-root': { borderRadius: '8px', textTransform: 'none' } }}
          >
            <Tab label="Buyurtmalarim" />
            <Tab label="Maʼlumotlarim" />
          </Tabs>
        </Box>

        <Box sx={{ flexGrow: 1, p: 3 }}>
          {tabValue === 0 && <Orders />}
          {tabValue === 1 && (
            <Box>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar
                  src={userInfo.avatar}
                  sx={{
                    bgcolor: 'primary.main',
                    width: 100,
                    height: 100,
                    borderRadius: '12px'
                  }}
                >
                  {!userInfo.avatar && <AccountCircleIcon fontSize="large" />}
                </Avatar>
                <Box ml={2}>
                  <IconButton color="primary" component="label">
                    <PhotoCamera />
                    <input type="file" hidden onChange={handleAvatarUpload} />
                  </IconButton>
                </Box>
              </Box>

              <TextField
                fullWidth
                label="Ism"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Familiya"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Tug'ilgan sana"
                name="birthDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={userInfo.birthDate}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Elektron pochta"
                name="email"
                type="email"
                value={userInfo.email}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Telefon raqam"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                disabled={!isEdited}
                sx={{
                  mt: 2,
                  backgroundColor: isEdited ? 'primary.main' : 'grey.400'
                }}
              >
                Saqlash
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default ProfilePage;
