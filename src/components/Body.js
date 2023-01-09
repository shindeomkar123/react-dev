import { useState } from "react";
import RestaurantList from "./RestaurantList";
import { RESTAURANT_LIST } from "../../constants";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST);

  const [filteredList, setFilteredList] = useState(restaurantList);

  const onFilterList = (searchTxt, restaurantList) => {
    const list = restaurantList.filter((el) =>
      el.data.name.includes(searchTxt)
    );
    return list;
  };

  onChangeText = (searchTxt) => {
    const list = [...restaurantList];
    if (searchTxt === "") {
      setFilteredList(list);
      return;
    }
    setFilteredList(list.filter((el) => el.data.name.includes(searchTxt)));
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type={"text"}
          onChange={(e) => {
            onChangeText(e.target.value);
            setSearchTxt(e.target.value);
          }}
          value={searchTxt}
        />
        <button
          onClick={() => {
            const data = onFilterList(searchTxt, restaurantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <RestaurantList restaurantList={filteredList} />
    </div>
  );
};

export default Body;
