import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurantList }) => {
  return (
    <div className="rest-list">
      {restaurantList.map((restaurant) => (
        <Restaurant {...restaurant.data} />
      ))}
    </div>
  );
};

export default RestaurantList;
