import Icon from "./Icon"

function Item({ item, handleOnChangeItem, handleDeleteItem }) {
    return (
        <li className={`flex items-center justify-evenly gap-2 sm:text-xl text-lg backdrop-blur-md border border-black/40 p-2 rounded-lg  ${item.packed && "line-through"}`}>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => handleOnChangeItem(item.id)}
                className="border-none"
            />
            <p>
                {item.quantity} {item.name}
            </p>
            <button onClick={() => handleDeleteItem(item.id)}><Icon /></button>
        </li>
    )
}

export default Item