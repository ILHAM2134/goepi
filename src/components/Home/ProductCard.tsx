import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Image from "next/image";

export type HomeCardProps = {
  img: string;
  title: string;
  caption: string;
};

export default function ProductCard({ img, title, caption }: HomeCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 310,
        minWidth: 250,
        mt: 3,
      }}
    >
      <CardMedia
        component="div"
        sx={{ width: "100%", height: "200px", mt: 0, position: "relative" }}
      >
        <Image alt={title} layout="fill" objectFit="contain" src={img} />
      </CardMedia>
      <CardContent sx={{ position: "relative" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "relative" }}>
        <Button size="small">Detail</Button>
        <Button size="small">Order Now</Button>
      </CardActions>
    </Card>
  );
}
