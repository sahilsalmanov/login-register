import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Alert,
  } from "@mui/material";
  import axios from "axios";
  import { useFormik } from "formik";
  import { paperStyle } from "./AuthStyles";
  import { changePasswordValidations } from "./validations";
  import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";
  
  export const ChangePasswordPage = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const URLSearch= new URLSearchParams(search)
    const token=URLSearch.get("token")
    const userId=URLSearch.get("userId")
    useEffect(() => {
      if (!token || !userId) {
        navigate("/signin");
      }
    }, [URLSearch]);
    const { handleSubmit, handleChange, touched, values, errors } = useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema: changePasswordValidations,
      onSubmit: async ({ password }, bag) => {
        const data={
          token,
          userId,
          password
        }
        try {
          await axios
           .put("http://localhost:8080/api/webuser/changepassword", data)
           navigate("/signin");
       } catch (error) {
        navigate("/signup");
       }
      }
    });
  
    return (
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid textAlign="center" marginBottom={2}>
            <Typography variant="h5" fontWeight="bold">
              Change password
            </Typography>
            <Typography variant="caption">
              Please fill this from to create an account!
            </Typography>
          </Grid>
          <Grid>
            {errors.general && <Alert severity="error">{errors.general}</Alert>}
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="standard"
              placeholder="Enter you password"
              onChange={handleChange}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <TextField
              type="password"
              name="confirmPassword"
              fullWidth
              label="Confirm Password"
              variant="standard"
              placeholder="Enter you comfirm password"
              onChange={handleChange}
              value={values.confirmPassword}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <Grid marginTop={3}>
              <Button
                fullWidth
                textAlign="center"
                type="submit"
                variant="contained"
                color="primary"
              >
                submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  };
  