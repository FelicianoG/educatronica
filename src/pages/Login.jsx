import React from "react";
import { Container } from "@mui/material";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import { CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LOGIN_CONTAINER_STYLES = {
  backgroundColor: "rgb(158 227 29)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Login() {
  return (
    <div style={LOGIN_CONTAINER_STYLES} id="login-main-container">
      <Container maxWidth="sm">
        <Card
          sx={{ padding: "50px 0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          raised
          height="100vh"
        >
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Acceso</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField color="success" label="Usuario" variant="outlined" />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField color="success" label="Contraseña" variant="outlined" />
            </Box>
            <Button sx={{ margin: "20px 0 0" }} color="success" variant="outlined">
              Entrar
            </Button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
