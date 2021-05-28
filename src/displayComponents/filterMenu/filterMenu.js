import {
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  SORT,
  TOGGLE_FAST_DELIVERY,
  TOGGLE_IN_STOCK,
} from "../../constants/constants";

function FilterMenu({ setPriceRange, filterDispatch, priceRange }) {
  return (
    <div className="filter-container apply-shadow">
      <h3>Apply Filters</h3>
      <div className="filter-main-section-containers">
        <div className="filter-sub-section-containers apply-shadow">
          <h4>Availability</h4>

          <div classname="filter-options-container">
            <div className="filter-input-section">
              <input
                for="instock"
                type="checkbox"
                name="availabilityfilter"
                onChange={() => {
                  filterDispatch({ type: TOGGLE_IN_STOCK });
                }}
              />
              <label id="instock">In Stock</label>
            </div>
          </div>
        </div>

        <div className="filter-sub-section-containers apply-shadow">
          <h4>Delivery</h4>

          <div classname="filter-options-container">
            <div className="filter-input-section">
              <input
                for="fastdelivery"
                type="checkbox"
                name="delivery"
                onChange={() => {
                  filterDispatch({ type: TOGGLE_FAST_DELIVERY });
                }}
              />
              <label id="fastdelivery">Fast Delivery</label>
            </div>
          </div>
        </div>

        <div className="filter-sub-section-containers apply-shadow">
          <h4>Sort by Price</h4>

          <div classname="filter-options-container">
            <div className="filter-input-section">
              <input
                for="lowtohighprice"
                type="radio"
                name="sortbyprice"
                onChange={() => {
                  filterDispatch({
                    type: SORT,
                    payload: PRICE_LOW_TO_HIGH,
                  });
                }}
              />
              <label id="lowtohighprice">Low to High</label>
            </div>

            <div className="filter-input-section">
              <input
                for="hightolow"
                type="radio"
                name="sortbyprice"
                onChange={() => {
                  filterDispatch({
                    type: SORT,
                    payload: PRICE_HIGH_TO_LOW,
                  });
                }}
              />
              <label id="hightolow">High to Low</label>
            </div>
          </div>
        </div>

        <div className="filter-sub-section-containers apply-shadow">
          <h4>Price Range</h4>

          <div classname="filter-options-container">
            <div className="filter-input-section">
              <input
                for="pricerange"
                type="range"
                min="0"
                max="3000"
                onChange={(e) => {
                  setPriceRange(e.target.value);
                }}
              />
              <p>Priced below: {priceRange}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
