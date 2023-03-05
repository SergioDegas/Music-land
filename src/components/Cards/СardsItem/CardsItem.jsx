import { List, Item, Img,Content,TitleCard,Wrapper } from './CardsItemStyled';
import { Box } from '@mui/material';
import {CircularDeterminate} from '../Circular'
import { FilmModal } from '../CardsModal/CardsModal';
export const CardsItem = ({id,title,poster_path,vote_average, overview }) => {
console.log(id)
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
return(
    <>
        <Wrapper sx={{minWidth:'180px',width:'180px',}}>
            <div style={{ overflow: 'hidden' }}>
              <Img
                src={!poster_path ? `No img` : `${BASE_IMG}${poster_path}`}
                alt="img"
              />
            </div>
             <Content sx={{ width:'180px',height:'98px'}}>
              <TitleCard gutterBottom component="div">
                {title}
              </TitleCard> 
               {/* <Box sx={{position: 'absolute',bottom:95, right:5}}> 
               <CircularDeterminate percent={vote_average}/> 
               </Box>  */}
               <FilmModal id ={id}/>
            </Content> 
          </Wrapper>
    </>
    
    )


}