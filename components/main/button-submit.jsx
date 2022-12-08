import Link from "next/link";

function SubmitButton(props) {
    return (
        <Link href={`submit/${props.rate}`}>
            <button className="text-white bg-primary-orange hover:bg-white hover:text-primary-orange rounded-full py-2 text-[15px] w-full tracking-widest uppercase">
                submit
            </button>
        </Link>
    )
}

export default SubmitButton