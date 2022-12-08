import Image from "next/image";
// import star from "../../public/images/icon-star.svg"

function IconMain() {
    return (
        <div className="p-4 bg-secondary-mediumGrey/10 inline-block rounded-full">
            <Image src="/images/icon-star.svg" alt="icon" width={17} height={16} />
        </div>
    )
}

export default IconMain