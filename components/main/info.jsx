import { main } from "../../constants"


function Info() {
    return (
        <div className="mt-4">
            <h1 className="text-secondary-white font-bold text-2xl mb-2">{main.title}</h1>
            <p className="text-secondary-lightGrey text-[15px]">{main.subtitle}</p>
        </div>
    )
}

export default Info