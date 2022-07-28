import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';


export default function LoadingWidget() {
  return (
        <>
    <Typography fontWeight={"bold"} variant="h5">Please wait while we are running this Scan..</Typography>
      <LinearProgress color="success" />
      </>
  );
}