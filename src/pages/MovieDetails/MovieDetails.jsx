import { useParams } from "react-router-dom"
import CardsByID from "components/Cards/CardsByID/CardsByID";
const MovieDetails = () => {
  const { id } = useParams();

return(
    <CardsByID id={id}/>
    )

}

export default MovieDetails