import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const CircularDeterminate = ({percent, size="45px"}) => {
  return (
    <Box 
    sx={{ position: 'relative',
    display: 'inline-flex',
    backgroundColor:'#032541',
    borderRadius:'50%',}}>
    <CircularProgress 
    size={size}
    sx={{borderRadius: 5,borderColor:'#032541'}}
    variant="determinate" 
    value={Math.round(percent * 10)}
    color={ percent < 5
      ? "error"
      : percent < 7
      ? "warning"
      : "success"}
    />
    <Box
      sx={{
        top: 2,
        left: 2.5,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{fontSize:"20px", fontWeight:'800'}} variant="caption" color="#fff">
        {`${Math.round(percent * 10)}%`}
      </Typography>
    </Box>
  </Box>
  );
}