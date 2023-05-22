import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const { users, setLoggedIn } = useContext(Context);

  const handleSubmit = (values) => {
    const { email, password } = values;

    const checkUser = users?.find(
      (q) => q.email === email && q.password === password
    );
    
    if (checkUser) {
      setLoggedIn([{ email, password }]);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form style={{ mt: 1 }}>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error"
                style={{
                  marginTop: 5,
                  color: "red",
                  fontFamily:
                    ' "Roboto","Helvetica","Arial",sans-serif',
                }}
              />

              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error"
                style={{
                  marginTop: 5,
                  color: "red",
                  fontFamily:
                    ' "Roboto","Helvetica","Arial",sans-serif',
                }}
              />

              <Field
                as={FormControlLabel}
                control={<Checkbox color="primary" />}
                label="Remember me"
                name="remember"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    style={{
                      fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                      textDecorationColor: "rgba(25, 118, 210, 0.4)",
                      color: "rgba(25, 118, 210, 0.4)",
                    }}
                    to="#"
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    style={{
                      fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                      textDecorationColor: "rgba(25, 118, 210, 0.4)",
                      color: "rgba(25, 118, 210, 0.4)",
                    }}
                    to="/sign-up"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Login;
