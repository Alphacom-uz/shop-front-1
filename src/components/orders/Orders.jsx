import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Card, CardContent, Avatar, Divider } from '@mui/material';

const Orders = () => {
  const [tabValue, setTabValue] = useState(0);

  const allOrders = [
    {
      id: 1,
      status: 'Yakunlangan',
      address: 'Toshkent, Yunusobod tumani',
      workHours: '9:00 - 18:00',
      orderDate: '2024-10-20',
      totalAmount: '$250',
      items: [
        { name: 'Telefon', quantity: 1, price: '$150', imageUrl: 'https://media.4rgos.it/i/Argos/9520103_R_Z001A?w=750&h=440&qlt=70' },
        { name: 'Quloqchin', quantity: 2, price: '$50', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpK2SVqeCFt5M1UV7bOaKG-5xt4WtDQTQeQ&s' }
      ]
    },
    {
      id: 2,
      status: 'To‘lov qilinmagan',
      address: 'Samarqand, Mirzo Ulugʻbek tumani',
      workHours: '10:00 - 19:00',
      orderDate: '2024-10-21',
      totalAmount: '$100',
      items: [
        { name: 'Soat', quantity: 1, price: '$100', imageUrl: 'https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg' }
      ]
    }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredOrders = () => {
    if (tabValue === 0) return allOrders;
    if (tabValue === 1) return allOrders.filter(order => order.status === 'To‘lov qilinmagan');
    if (tabValue === 2) return allOrders.filter(order => order.status === 'Faol');
  };

  return (
      <Box>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="Order Tabs">
          <Tab label="Barcha buyurtmalar" />
          <Tab label="Toʻlov qilinmagan" />
          <Tab label="Faol" />
        </Tabs>

        <Box mt={3}>
          {filteredOrders().map((order) => (
            <Card
              key={order.id}
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: '10px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '16px'
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>Buyurtma ID: {order.id}</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1" color="text.secondary">
                  Holati: {order.status}
                </Typography>
                <Typography>Manzili: {order.address}</Typography>
                <Typography>Ishlash vaqtlari: {order.workHours}</Typography>
                <Typography>Buyurtma sanasi: {order.orderDate}</Typography>
                <Typography>Umumiy qiymati: {order.totalAmount}</Typography>

                <Box mt={2}>
                  <Typography variant="subtitle2">Mahsulotlar:</Typography>
                  {order.items.map((item, index) => (
                    <Card
                      key={index}
                      variant="outlined"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                        borderRadius: '8px',
                        padding: '8px'
                      }}
                    >
                      <Avatar
                        src={item.imageUrl}
                        sx={{ width: 48, height: 48, borderRadius: '8px', mr: 2 }}
                      />
                      <Box>
                        <Typography>- {item.name}</Typography>
                        <Typography color="text.secondary" fontSize="0.9em">
                          Miqdori: {item.quantity} | Narxi: {item.price}
                        </Typography>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
  );
};

export default Orders;
