import { useSelector } from "react-redux"
import ShopItem from "../../app/components/ShopItem"

const Shop = () => {
    const items = useSelector(state => state.shop.items)
    return (
      <div>
        <h5>Available Products ({items.length})</h5>
        <div>
          <div className="list-group">
            {items.map((item, i) => (
                <ShopItem item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Shop