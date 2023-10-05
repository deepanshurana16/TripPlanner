import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ErrorResponse } from 'react-router-dom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const Invoices = () => {
  const options = [

    { label: 'Travel', value: 'Travel' },
 
    { label: 'Accomodation', value: 'Accomodation' },
 
    { label: 'Food', value: 'Food' },
 
  ];
 
  const [value, setValue] = React.useState('fruit');
 
  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  return (
  
  <>
  {/* <Box style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}>
      <Header
        title="ADD EXPENSES"
        subtitle="  Submit your expenses" /></Box>

<Header
        title="ADD EXPENSES"
        subtitle="  Submit your expenses" /> */}
{/* 
<div>

<select>

  <option value="fruit">Fruit</option>

  <option value="vegetable">Vegetable</option>

  <option value="meat">Meat</option>

</select>

</div> */}

<div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>

<label>TYPE OF EXPENSE</label>

<select value={value} onChange={handleChange}>

  {options.map((option) => (

    <option value={option.value}>{option.label}</option>

  ))}

</select>



<p>You are submitting {value} request</p>

</div>

<Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" >
        Success
      </Button>
    </Stack>
    
  </>
  );
};

export default Invoices;
