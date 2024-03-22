import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What is Umar Building Fund?",
        isOpen: true,
        content:
            "Umar Building Fund or $UMAR is a memecoin on Solana built by devout followers of Certified School Psychologist, Motivational Speaker, Pan-Afrikanist, Doctor of Clinical Psychology, NIBPA/FDMG/IMIPAP President, and Mr.Unapologetically Afrikan: Dr. Umar Ifatunde"
    },
    {
        id: uuid(),
        title: "How can I buy $UMAR?",
        isOpen: false,
        content:
            "This is only for Africans. The trading is only for Africans. You may not bring your white wife. You may not bring your white wife. You may not bring your white wife. If you bring a non-African, you and the non-African will be blacklisted."
    },
    {
        id: uuid(),
        title: "Where can I ask more questions about $UMAR?",
        isOpen: false,
        content:
            "If you have any further questions or need assistance regarding this template, please feel free to reach out to join the $UMAR Telegram or check for updates on the $UMAR Twitter."
    },
    {
        id: uuid(),
        title: "Can I bring my white wife?",
        isOpen: false,
        content:
            "YOU MAY NOT BRING YOUR WHITE WIFE. YOU MAY NOT BRING YOUR WHITE WIFE. YOU MAY NOT BRING YOUR WHITE WIFE. IF YOU BRING A NON-AFRICAN, YOU AND THE NON-AFRICAN WILL BE ESCORTED OUT."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
