import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "First Dr Umar Coin On Solana",
        content:
            "Embark on a pioneering journey with the first-ever Dr Umar Coin on the Solana blockchain. This revolutionary coin is not just a digital asset but a tribute to empowerment and community action. Designed for speed and efficiency, our coin leverages the Solana network's robust infrastructure to offer lightning-fast transactions and minimal fees. By holding Dr Umar Coin, you're not just part of a financial movement; you're supporting a legacy of education and independence.",
        align: "right",
        image: "https://moguldom.com/wp-content/uploads/2021/10/915.-Dr.-Umar-Johnson-Claims-Black-America-Doesnt-Need-Reparations-.jpg"
    },
    {
        id: uuid(),
        title: "Umar Building Fund",
        content:
            "Be a cornerstone of progress with the Umar Building Fund—a visionary project funded by the UMARCoin community. Your contribution to this fund isn't just a transaction; it's a building block for a future where education and development go hand in hand. The Umar Building Fund aims to establish educational centers and community programs that stand as beacons of knowledge and self-reliance.",
        align: "left",
        image: "https://i.ytimg.com/vi/8IlfYDS34e0/maxresdefault.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
