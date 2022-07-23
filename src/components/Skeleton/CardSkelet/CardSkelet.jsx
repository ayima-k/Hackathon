import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { CardList } from '../../Card/List/index'

export default function Variants() {
  console.log(CardList);
  return (
    <React.Fragment>
      {
        [...new Array(10)].map((_, i) => (
          <Stack spacing={2} key={i}>
            <Skeleton variant="text" />
            <Box>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Box>
          </Stack>
        ))
      }

    </React.Fragment>
  );
}