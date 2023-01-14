import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "./RestaurantList";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const [allRestaurantList, setRestaurantList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const onFilterList = (searchTxt, restaurantList) => {
    if (searchTxt === "") {
      return setFilteredList(allRestaurantList);
    }
    const filteredList = restaurantList.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantList = await data.json();
    setRestaurantList(restaurantList?.data?.cards[2]?.data?.data?.cards);
    setFilteredList(restaurantList?.data?.cards[2]?.data?.data?.cards);
  };

  //! on value type change event
  // onChangeText = (searchTxt) => {
  //   const list = [...restaurantList];
  //   if (searchTxt === "") {
  //     setFilteredList(list);
  //     return;
  //   }
  //   setFilteredList(list.filter((el) => el.data.name.includes(searchTxt)));
  // };

  if (allRestaurantList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type={"text"}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
          value={searchTxt}
        />
        <button
          onClick={() => {
            onFilterList(searchTxt, allRestaurantList);
          }}
        >
          Search
        </button>
      </div>
      {filteredList?.length > 0 ? (
        <RestaurantList restaurantList={filteredList} />
      ) : (
        <div>No restaurant found...</div>
      )}
    </div>
  );
};

export default Body;
