function Button({ onClick, type, children }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className="w-full font-semibold min-w-max bg-green-500 rounded-md sm:p-2 hover:scale-90 transition shadow-[0_0px_20px_1px_rgba(0,0,0,.2)] border border-black/40"
        >
            {children}
        </button>
    )
}

export default Button