import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FirstQues from './FirstQues';
import SecondQues from './SecondQues';
import ThirdQues from './ThirdQues';
import FourthQues from './FourthQues';
import FifthQues from './FifthQues';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const array = [
    {
      name: "first",
      component: ()=> <FirstQues />
    },
    {
      name: "Second",
      component: <SecondQues />
    },
    {
      name: "third",
      component: <ThirdQues />
    },
    {
      name: "fourth",
      component: <FourthQues />
    },
    {
      name: "fifth",
      component: <FifthQues />
    },

  ]

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}
