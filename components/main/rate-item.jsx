"use client"

function RateItem(props) {
    return (
        <button className={`w-12 h-12  rounded-full flex justify-center items-center hover:bg-secondary-mediumGrey hover:text-secondary-white cursor-pointer ${props.active ? "bg-primary-orange text-white hover:bg-primary-orange hover:text-white" : "bg-secondary-mediumGrey/10 text-secondary-lightGrey"} `} onClick={props.handle}>
            {props.number}
        </button>
    )
}

export default RateItem