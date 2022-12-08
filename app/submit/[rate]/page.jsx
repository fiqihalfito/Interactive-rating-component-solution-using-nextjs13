import Image from "next/image";
import { submit } from "../../../constants";

export default function SubmitPage({ params }) {
    return (
        <div className="rounded-3xl bg-secondary-darkBlue p-8 w-[25rem] text-center">
            <Image src="/images/illustration-thank-you.svg" width={162} height={108} alt="illustration" className="mx-auto" />
            <h6 className="text-primary-orange rounded-full text-[12px] inline-block py-1 px-3 bg-secondary-mediumGrey/20 my-6">You selected {params.rate} out of 5</h6>
            <h1 className="text-white text-xl font-bold mb-2">{submit.title}</h1>
            <p className="text-[15px] text-secondary-mediumGrey">{submit.subtitle}</p>
        </div>
    )
}