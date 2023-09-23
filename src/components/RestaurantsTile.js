import { CDN_URL } from "../utlis/constants";

const RestaurantsTile = (props) => {
    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        avgRatingString,
        cuisines,
        locality

    } = resData?.info;
    return (
        <div className="res-tile">
            <a className="">
                <div className="res-image-tile">
                    <div className="res-image">
                        <img className="" src={CDN_URL + cloudinaryImageId} />
                        {/* <div className="res-offer">
                            {aggregatedDiscountInfoV3}
                        </div> */}
                    </div>
                </div>
                <div className="res-details">
                    <div className="res-name">{name}</div>
                    <div className="res-star">
                        <div className="res-rating">
                            <span>{avgRatingString}</span>
                        </div>
                    </div>
                    <div className="res-descriptions">
                        <div className="res-types">{cuisines.join(',')}</div>
                        <div className="res-location">{locality}</div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default RestaurantsTile;