import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation";
import axios from "axios";

const sex = ["Male", "Female", "Others"];
const govtID = ["Aadhaar", "PAN"];
const label = ["Mr.", "Mrs."];
const religion = ["Hindu", "Muslim", "Sikh", "Christian", "Others"];
const marital = ["Single", "Married", "Others"];
const blood = ["AB", "A", "B", "O"];

const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:7000/api/add", data);
      console.log(res.data);
      alert("Data submitted successfully");
    } catch (error) {
      console.log(error.response);
    }
  };

  const onErrors = (err) => console.log(err);
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Personal Details</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Name* </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="name"
                  placeholder="Enter Name"
                  {...register("name")}
                  error={errors.name ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.name?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">
                  Date of Birth or Age*
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="DD/MM/YYYY or Age in Years"
                  name="age"
                  {...register("age")}
                  error={errors.age ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.age?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Sex*</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  name="sex"
                  select
                  fullWidth
                  size="small"
                  placeholder="Select Sex"
                  {...register("sex")}
                  error={errors.sex ? true : false}
                >
                  {sex.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <Typography variant="inherit" color="textSecondary">
                  {errors.sex?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Mobile</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter Mobile"
                  {...register("mobile")}
                  error={errors.mobile ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.mobile?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box display="flex" flexDirection="row">
              <Box mr={1}>
                <Typography variant="subtitle1">Govt Issued ID</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="ID Type"
                  {...register("govtIDType")}
                >
                  {govtID.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" flexDirection="row">
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter Govt ID"
                  {...register("govtID")}
                  error={errors.govtID ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.govtID?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12}>
            <Typography variant="h6">Contact Details </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="row">
              <Box mr={1}>
                <Typography variant="subtitle1">Guardian Details</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Enter Label"
                  {...register("guardLabel")}
                >
                  {label.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter Guardian Name"
                  {...register("guardName")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Email</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter Email"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">
                  Emergency Contact Number
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  name="emergNo"
                  size="small"
                  placeholder="Enter Emergency No"
                  {...register("emergNo")}
                  error={errors.emergNo ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.emergNo?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Address Details */}
          <Grid item xs={12}>
            <Typography variant="h6">Address Details</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Address</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="address"
                  placeholder="Enter Address"
                  {...register("address")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">State</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="state"
                  placeholder="Enter State"
                  {...register("state")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">City</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="city"
                  placeholder="Enter City/Town/Village"
                  {...register("city")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Country</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="country"
                  placeholder="Enter Country"
                  {...register("country")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Pincode</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="pincode"
                  placeholder="Enter Pincode"
                  {...register("pincode")}
                  error={errors.pincode ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.pincode?.message}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Other Details */}
          <Grid item xs={12}>
            <Typography variant="h6">Other Details</Typography>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Occupation</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="occupation"
                  placeholder="Enter Occupation"
                  {...register("occupation")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Religion</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Enter Religion"
                  {...register("religion")}
                >
                  {religion.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Marital Status</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Enter Marital Status"
                  {...register("marital")}
                >
                  {marital.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Blood Group</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Enter Blood Group"
                  {...register("blood")}
                >
                  {blood.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="row">
              <Box mr={2}>
                <Typography variant="subtitle1">Nationality</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  name="nationality"
                  placeholder="Enter Nationality"
                  {...register("nationality")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Box mr={3}>
                <Button variant="outlined" color="primary" size="large">
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddForm;
