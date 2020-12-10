import { Box, Typography } from '@material-ui/core';

export default function App () {
  return (
    <Box
      display="flex"
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
    >
      <Typography>
        Hello world
      </Typography>
    </Box>
  );
}