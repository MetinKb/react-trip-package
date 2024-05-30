function Footer({ items }) {
    const packedItems = items.filter(item => item.packed).length
    const percentage = Math.round((packedItems / items.length) * 100)

    return (
        <footer className="flex items-center justify-center m-6 sm:p-4 p-2 rounded-lg min-h-max backdrop-blur-md border border-black/40 sm:text-2xl text-lg ">
            {items.length === 0 ? "Add some item to your pack!"
                :
                percentage === 100 ?
                    'You packed everything! Ready to go ✈!'
                    :
                    `You have ${items.length} items on your list. You already packed ${packedItems}, (${percentage}%)`}
        </footer>
    )
}

export default Footer