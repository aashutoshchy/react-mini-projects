function Button({ color, text, onClick }) {
    return (
        <div className='bg-white h-15 w-30 p-2 rounded-4xl'>
            {/* On Click is props, which receive function */}
            <button onClick={onClick} className={`h-full w-full rounded-4xl cursor-pointer font-bold`} style={{ backgroundColor: color, color: text }}>{color}</button>
        </div >
    )
}

export default Button