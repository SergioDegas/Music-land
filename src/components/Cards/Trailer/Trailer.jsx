import { selectMovieTrailer } from "components/redux/recipes/selector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export const Trailer = ({width, height}) => {
  const [trailerKey, setTrailerKey] = useState();
  
  const results = useSelector(selectMovieTrailer);

  useEffect(() => {
    const newTrailerKeys = results.map(({ results }) => {
      return results
        .filter(({ name }) => name.toLowerCase().includes('official'))
        .map(({ key, name }) => ({ key, officialName: name }));
    });

    setTrailerKey(newTrailerKeys);
  }, [results]);

    return (
      <>
        {results && (
          <div>
            {trailerKey &&
              trailerKey.map(e =>
                e.slice(0, 1).map(({ key, name }) => {
                  return (
                    <div key={key}>
                          <iframe
                              width={width}
                              height={height}
                        title={name}
                        src={`https://www.youtube.com/embed/${key}`}
                      ></iframe>
                    </div>
                  );
                })
              )}
          </div>
        )}
      </>
    );
}