const Section = ({ category, images, index }) => {
  return (
    <>
      <div className="container">
        <span className="title">{category}</span>;
        <div className="list-movies" key={index}>
          {images.map((img, index) => {
            return <img src={img} alt="" key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Section;
