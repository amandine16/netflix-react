import movies from "../data/movies.json";

const Section = () => {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div className="container">
            <span className="title">{movie.category}</span>;
            <div className="list-movies" key={index}>
              {movie.images.map((img, index) => {
                return <img src={img} alt="" key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Section;
