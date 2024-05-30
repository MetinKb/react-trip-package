import Item from "./Item"

function ItemContainer({ items, handleOnChangeItem, handleDeleteItem }) {

    return (
        <ul className="flex items-start justify-end flex-wrap p-4 sm:my-4 my-2 gap-3 overflow-auto">
            {items.map((item, i) =>
                <Item
                    item={item}
                    key={i}
                    handleOnChangeItem={handleOnChangeItem}
                    handleDeleteItem={handleDeleteItem}
                />)}
        </ul>
    )
}

export default ItemContainer