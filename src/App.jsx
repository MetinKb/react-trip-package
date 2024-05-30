import Footer from "components/Footer"
import Header from "components/Header"
import Main from "components/Main"
import { useState, useEffect } from "react"

function App() {
    const [items, setItems] = useState([])
    const [sortBy, setSortBy] = useState("input")

    let sortedItems = items

    if (sortBy === "input") sortedItems = items

    if (sortBy === "name")
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))

    if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed)

    useEffect(() => {
        const storedItems = localStorage.getItem("items")
        storedItems ? setItems(JSON.parse(storedItems)) : localStorage.setItem("items", JSON.stringify([]))
    }, [])

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    function handleAddItem(item) {
        setItems((items) => [...items, item])
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter(item => item.id !== id))
    }

    function handleDeleteSelectedItems(ids) {
        setItems((items) => items.filter(item => !ids.includes(item.id)))
    }

    function handleClearList() {
        if (items.length === 0) {
            alert("Add some items first!")
            return
        }

        const confirmed = window.confirm("Are you sure you want to delete all items?")
        if (confirmed) setItems([])
    }

    function handleOnChangeItem(id) {
        setItems(items => items.map(
            item => item.id === id ? { ...item, packed: !item.packed } : item
        ))
    }

    return (
        <div className="flex flex-col items-center justify-between bg-cover w-full h-screen bg-[url('assets/images/saas.jpg')]">
            <Header />
            <Main
                items={sortedItems}
                sortBy={sortBy}
                setSortBy={setSortBy}
                handleAddItem={handleAddItem}
                handleDeleteItem={handleDeleteItem}
                handleDeleteSelectedItems={handleDeleteSelectedItems}
                handleOnChangeItem={handleOnChangeItem}
                handleClearList={handleClearList}
            />
            <Footer items={items} />
        </div>
    )
}

export default App