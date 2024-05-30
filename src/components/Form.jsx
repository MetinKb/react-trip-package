import { useState } from "react"
import Button from "./Button"

function Form({ items, handleAddItem, handleDeleteSelectedItems, sortBy, setSortBy, handleClearList }) {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)

    if (name.length > 25) {
        setName(name => name.slice(0, 25))
    }

    if (!/^[\p{L}]*$/u.test(name)) {
        setName(name => name.replace(/[^\p{L}]/gu, ''));
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!name) {
            alert("Please add an item name!")
            return
        }

        const newItem = { id: Date.now(), name, quantity, packed: false }

        handleAddItem(newItem)
        setQuantity(1)
        setName("")
    }

    function handleMultipleDeletion(id) {
        if (!window.confirm("Are you sure you want to delete selected items?")) return

        handleDeleteSelectedItems(id)
    }

    return (
        <form onSubmit={handleSubmit} className="shadow-[0_0px_20px_1px_rgba(0,0,0,.2)] p-2 flex flex-col items-center justify-center gap-6 max-w-min min-h-max backdrop-blur-lg border rounded-lg border-black/30">
            <h3 className="sm:text-2xl text-lg font-Montserrat">
                What do you need for your trip 👜?
            </h3>
            <span className="flex flex-col items-center justify-evenly gap-3 w-full ">
                <span className="flex gap-3 w-full sm:flex-row flex-col">
                    <span className="flex gap-4">
                        <select value={quantity} onChange={e => setQuantity(+e.target.value)} className="p-2 rounded-lg shadow-[0_0px_20px_1px_rgba(0,0,0,.2)] border-none outline-none">
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((num, index) => (
                                <option value={num} key={index}>{num}</option>
                            ))}
                        </select>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            placeholder="Item Name..."
                            className="flex flex-auto p-2 rounded-lg outline-none border-none shadow-[0_0px_20px_1px_rgba(0,0,0,.2)]"
                        />
                    </span>
                    <>
                        <select
                            className="p-2 rounded-lg outline-none"
                            value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="input">Sort by input order</option>
                            <option value="name">Sort by item name</option>
                            <option value="packed">Sort by packed status</option>
                        </select>
                    </>
                </span>
                <span className="flex items-center justify-between w-full gap-4 flex-col sm:flex-row">
                    <span className="w-full flex items-center justify-between gap-4">
                        <Button
                            type="submit">
                            Add Item
                        </Button>
                        <Button
                            type="button"
                            onClick={() => handleClearList()}>Clear All Items</Button>
                    </span>
                    {items.some(item => item.packed === true) ? (
                        <Button
                            type="button"
                            onClick={() => handleMultipleDeletion(items.filter(item => item.packed).map(item => item.id))}

                        >
                            Delete Selected Items
                        </Button>
                    ) : null}
                </span>
            </span>
        </form >
    )
}

export default Form