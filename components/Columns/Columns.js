import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Emily J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Before $UMAR, I couldn't even spell cryptocurrency. Now I'm making history, one meme-tastic donation at a time! Take that, student loans!"
    },
    {
        id: uuid(),
        title: "Jason F.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "They say money can't buy happiness, but clearly they haven't invested in $UMAR. It's like every coin is a piece of joy – just don't ask me to explain blockchain."
    },
    {
        id: uuid(),
        title: "Miguel J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I asked my magic 8-ball if $UMAR was a good investment. It said, 'Without a doubt.' That thing's never wrong; it predicted my prom date would stand me up."
    },
    {
        id: uuid(),
        title: "Kim L.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "They laughed when I mentioned $UMAR at the dinner table. Now who's laughing, Mom? The ROI speaks louder than Dad at Thanksgiving!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
