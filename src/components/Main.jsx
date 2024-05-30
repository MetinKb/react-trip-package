import Form from "./Form"
import ItemContainer from "./ItemContainer"

function Main({ items, handleAddItem, handleDeleteItem, handleDeleteSelectedItems, handleOnChangeItem, handleClearList, sortBy, setSortBy }) {

    return (
        <main className="flex sm:h-[calc(100%-15rem)] h-[calc(100%-7rem)] flex-col items-center justify-start">
            <Form
                sortBy={sortBy}
                setSortBy={setSortBy}
                items={items}
                handleAddItem={handleAddItem}
                handleDeleteSelectedItems={handleDeleteSelectedItems}
                handleClearList={handleClearList}
            />
            <ItemContainer
                items={items}
                handleOnChangeItem={handleOnChangeItem}
                handleDeleteItem={handleDeleteItem}
            />
        </main>
    )
}

export default Main