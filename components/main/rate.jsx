// "use client"

import RateItem from "./rate-item"

function Rate(props) {

    return (
        <div className="flex justify-between text-[15px] my-6 select-none">
            {props.buttons.map((item, i) =>
                <RateItem key={i} number={i + 1} active={item} handle={() => props.handleClick(i)} />
            )}
        </div>
    )
}

export default Rate