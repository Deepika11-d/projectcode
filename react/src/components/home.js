import React, { useEffect, useState } from "react";
import axios from "axios"; 
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { home } from "./networks";

function DashboardPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
   
        const token = localStorage.getItem("accessToken");

    
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

       
        const response = await axios.get(
          home(),
          config
        );
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      
      }
    };

    fetchCards();
  }, []); 

  return (
    <div style={{marginLeft:40,marginTop:60}}>
      
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        {cards.map((card) => (
          <Grid item xs={2} sm={4} md={4} key={card.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300, width: 340, objectFit: "cover" }}
                image={
                  card.image || "/static/images/cards/contemplative-reptile.jpg"
                }
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DashboardPage;
