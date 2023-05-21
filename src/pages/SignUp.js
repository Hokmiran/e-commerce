import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function SignUp() {
    const [users, setUsers] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        setUsers([...users, values]);
        localStorage.setItem("users", JSON.stringify([...users, values]));
        resetForm();
    };
    console.log(users);
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
                <Typography mb={1} component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required("First Name is required"),
                        lastName: Yup.string().required("Last Name is required"),
                        email: Yup.string().email("Invalid email").required("Email is required"),
                        password: Yup.string().required("Password is required"),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref("password"), null], "Passwords must match")
                            .required("Confirm Password is required"),
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="firstName"
                                    style={{
                                        marginTop: 5,
                                        color: "red", fontFamily:
                                            ' "Roboto","Helvetica","Arial",sans-serif'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    autoComplete="lname"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="lastName"
                                    style={{
                                        marginTop: 5,
                                        color: "red", fontFamily:
                                            ' "Roboto","Helvetica","Arial",sans-serif'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    autoComplete="email"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    style={{
                                        marginTop: 5,
                                        color: "red", fontFamily:
                                            ' "Roboto","Helvetica","Arial",sans-serif'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    autoComplete="new-password"
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type="password"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="password"
                                    style={{
                                        marginTop: 5,
                                        color: "red", fontFamily:
                                            ' "Roboto","Helvetica","Arial",sans-serif'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    autoComplete="new-password"
                                    name="confirmPassword"
                                    required
                                    fullWidth
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="confirmPassword"
                                    style={{
                                        marginTop: 5,
                                        color: "red", fontFamily:
                                            ' "Roboto","Helvetica","Arial",sans-serif'
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link
                                    style={{
                                        fontFamily:
                                            ' "Roboto","Helvetica","Arial",sans-serif',
                                        textDecorationColor: "rgba(25, 118, 210, 0.4)",
                                        color: "rgba(25, 118, 210, 0.4)",
                                    }}
                                    to="/sign-in"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Box>
        </Container>
    );
}

export default SignUp;
