const Restaurant = ({ name, cloudinaryImageId, cuisines }) => {
  return (
    <div className="rest-card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3 className="name">{name}</h3>
      <div className="cuisines">
        <h6 className="cuisine">{cuisines.join(",")}</h6>
      </div>
    </div>
  );
};

export default Restaurant;
