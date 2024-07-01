import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=2048x2048&w=is&k=20&c=JIcqiyGZRqfbiMRdaTW8kitvYYPrcbmuepRhl4QlTEg="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temprature: {info.temp}</p>
            <p>Max Temp: {info.temp_max}</p>
            <p>Min Temp: {info.temp_min}</p>
            <p>Humidity: {info.humidity}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
