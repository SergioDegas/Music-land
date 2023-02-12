/* eslint-disable no-unused-vars */

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { CoverImage, TinyText, WallPaper, Widget } from './styled';
import { useEffect, useState } from 'react';
import { Api } from 'components/Api/Api';
import ReactAudioPlayer from 'react-audio-player';

function TopChart() {
    const [_, setIsLoading] = useState(false);
    const [track, setTrack] = useState([]);

    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = useState(32);
    const [paused, setPaused] = useState(false);
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor =
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true);
                const tracks = await Api();
                const object = tracks.map(({ url, name, artist }) => {
                    // console.log(artist);
                    return {
                        artistName: artist.name,
                        id: artist.mbid,
                        trackName: name,
                        linkMusic: url,
                    };
                });
                setTrack(object);
                //   console.log(track);
                // setTrack(tracks);
                // artist.name
                // artist.mbid (id)
                //name (name track)
                // url (link to music )
            } catch (error) {
                // toast.error('Oops! Something went wrong! Please try again.');
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);
    
    return (
      <main>
        <ReactAudioPlayer
          src="https://www.last.fm/music/Agust+D/_/People"
          onPlay
          controls
          autoPlay
        />
        <ul>
          {track.map(({ artistName, id, trackName, linkMusic }) => {
            return <li key={id}></li>;
          })}
        </ul>
      </main>
    );
}

export default TopChart;
//  {' '}
//                 <Box sx={{ width: '100%', overflow: 'hidden' }}>
//                   <Widget>
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <CoverImage>
//                         <img
//                           alt={trackName}
//                           src="/static/images/sliders/chilling-sunday.jpg"
//                         />
//                       </CoverImage>
//                       <Box sx={{ ml: 1.5, minWidth: 0 }}>
//                         <Typography
//                           variant="caption"
//                           color="text.secondary"
//                           fontWeight={500}
//                         >
//                           {artistName}
//                         </Typography>
//                         <Typography noWrap>
//                           <b>{trackName}</b>
//                         </Typography>
//                         <Typography noWrap letterSpacing={-0.25}>
//                           {artistName} &mdash; {trackName}
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Slider
//                       aria-label="time-indicator"
//                       size="small"
//                       value={position}
//                       min={0}
//                       step={1}
//                       max={duration}
//                       onChange={(_, value) => setPosition(value)}
//                       sx={{
//                         color:
//                           theme.palette.mode === 'dark'
//                             ? '#fff'
//                             : 'rgba(0,0,0,0.87)',
//                         height: 4,
//                         '& .MuiSlider-thumb': {
//                           width: 8,
//                           height: 8,
//                           transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
//                           '&:before': {
//                             boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
//                           },
//                           '&:hover, &.Mui-focusVisible': {
//                             boxShadow: `0px 0px 0px 8px ${
//                               theme.palette.mode === 'dark'
//                                 ? 'rgb(255 255 255 / 16%)'
//                                 : 'rgb(0 0 0 / 16%)'
//                             }`,
//                           },
//                           '&.Mui-active': {
//                             width: 20,
//                             height: 20,
//                           },
//                         },
//                         '& .MuiSlider-rail': {
//                           opacity: 0.28,
//                         },
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         mt: -2,
//                       }}
//                     >
//                       <TinyText>{formatDuration(position)}</TinyText>
//                       <TinyText>
//                         -{formatDuration(duration - position)}
//                       </TinyText>
//                     </Box>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mt: -1,
//                       }}
//                     >
//                       <IconButton aria-label="previous song">
//                         <FastRewindRounded
//                           fontSize="large"
//                           htmlColor={mainIconColor}
//                         />
//                       </IconButton>
//                       <IconButton
//                         aria-label={paused ? 'play' : 'pause'}
//                         onClick={() => setPaused(!paused)}
//                       >
//                         {paused ? (
//                           <PlayArrowRounded
//                             sx={{ fontSize: '3rem' }}
//                             htmlColor={mainIconColor}
//                           />
//                         ) : (
//                           <PauseRounded
//                             sx={{ fontSize: '3rem' }}
//                             htmlColor={mainIconColor}
//                           />
//                         )}
//                       </IconButton>
//                       <IconButton aria-label="next song">
//                         <FastForwardRounded
//                           fontSize="large"
//                           htmlColor={mainIconColor}
//                         />
//                       </IconButton>
//                     </Box>
//                     <Stack
//                       spacing={2}
//                       direction="row"
//                       sx={{ mb: 1, px: 1 }}
//                       alignItems="center"
//                     >
//                       <VolumeDownRounded htmlColor={lightIconColor} />
//                       <Slider
//                         aria-label="Volume"
//                         defaultValue={30}
//                         sx={{
//                           color:
//                             theme.palette.mode === 'dark'
//                               ? '#fff'
//                               : 'rgba(0,0,0,0.87)',
//                           '& .MuiSlider-track': {
//                             border: 'none',
//                           },
//                           '& .MuiSlider-thumb': {
//                             width: 24,
//                             height: 24,
//                             backgroundColor: '#fff',
//                             '&:before': {
//                               boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
//                             },
//                             '&:hover, &.Mui-focusVisible, &.Mui-active': {
//                               boxShadow: 'none',
//                             },
//                           },
//                         }}
//                       />
//                       <VolumeUpRounded htmlColor={lightIconColor} />
//                     </Stack>
//                   </Widget>
//                   <WallPaper />
//                 </Box>{' '}