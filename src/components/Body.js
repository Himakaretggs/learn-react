import RestaurantsTile  from "./RestaurantsTile";
import SearchBar  from "./Search";
import {resList} from "../utlis/mockdata"

const Body = () => {
    return (
        <div className="">
            <SearchBar />
            <div className="container resContainer">
                {resList.map((resListItem,index) => (
                    <RestaurantsTile key={index} resData={resListItem} />
                ))}
            </div>
        </div>
    );
};

export default Body;