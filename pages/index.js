import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Umar Building Fund ($UMAR) - The Dr.Umar Coin on Solana ✊🏿"
                description="Discover $UMAR, the first Dr Umar Coin on Solana."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Secure Your Reperations with $UMAR
                            </PageTitle>
                            {/* <Content className="text-center" alignment="center">
                                <p>
                                    Hey there! Welcome to NutriTrack, the
                                    ultimate nutrition meal planner powered by
                                    Notion. We&apos;ve got some awesome features
                                    lined up to make your nutrition journey a
                                    piece of cake (pun intended). Check them
                                    out:
                                </p>
                            </Content> */}
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer>
                            <PageTitle
                                className="text-center mx-auto mb-8"
                                type="default"
                            >
                                The Prince of PanAfrikanism Speaks...
                            </PageTitle>
                            <div
                                id="default-carousel"
                                class="relative w-full"
                                data-carousel="slide"
                            >
                                <div class="relative overflow-hidden rounded-lg h-[500px] md:h-[800px]">
                                    <div
                                        class="hidden duration-1500 ease-in-out"
                                        data-carousel-item
                                    >
                                        <img
                                            src="https://moguldom.com/wp-content/uploads/2021/10/915.-Dr.-Umar-Johnson-Claims-Black-America-Doesnt-Need-Reparations-.jpg"
                                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>

                                    <div
                                        class="hidden duration-1500 ease-in-out"
                                        data-carousel-item
                                    >
                                        <img
                                            src="https://rollingout.com/wp-content/uploads/2021/04/Dr.-umar-johnson.png"
                                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>

                                    <div
                                        class="hidden duration-1500 ease-in-out"
                                        data-carousel-item
                                    >
                                        <img
                                            src="https://media.licdn.com/dms/image/C5603AQGh0EKi7y6X5A/profile-displayphoto-shrink_800_800/0/1520080334888?e=2147483647&v=beta&t=_4_qoKIjfmbR2aZ6Q1cg18ZaVviEGB76EilwTeYvmzg"
                                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>

                                    <div
                                        class="hidden duration-1500 ease-in-out"
                                        data-carousel-item
                                    >
                                        <img
                                            src="https://alotonmymindblog.files.wordpress.com/2016/05/bigot.png"
                                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>

                                    <div
                                        class="hidden duration-1500 ease-in-out"
                                        data-carousel-item
                                    >
                                        <img
                                            src="https://i.pinimg.com/564x/d2/b2/24/d2b224446d906ed4ee1d596d5ae2a0c6.jpg"
                                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>
                                </div>

                                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                    <button
                                        type="button"
                                        class="w-3 h-3 rounded-full"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                        data-carousel-slide-to="0"
                                    ></button>
                                    <button
                                        type="button"
                                        class="w-3 h-3 rounded-full"
                                        aria-current="false"
                                        aria-label="Slide 2"
                                        data-carousel-slide-to="1"
                                    ></button>
                                    <button
                                        type="button"
                                        class="w-3 h-3 rounded-full"
                                        aria-current="false"
                                        aria-label="Slide 3"
                                        data-carousel-slide-to="2"
                                    ></button>
                                    <button
                                        type="button"
                                        class="w-3 h-3 rounded-full"
                                        aria-current="false"
                                        aria-label="Slide 4"
                                        data-carousel-slide-to="3"
                                    ></button>
                                    <button
                                        type="button"
                                        class="w-3 h-3 rounded-full"
                                        aria-current="false"
                                        aria-label="Slide 5"
                                        data-carousel-slide-to="4"
                                    ></button>
                                </div>

                                <button
                                    type="button"
                                    class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-prev
                                >
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg
                                            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 1 1 5l4 4"
                                            />
                                        </svg>
                                        <span class="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-next
                                >
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg
                                            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 9 4-4-4-4"
                                            />
                                        </svg>
                                        <span class="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto mb-8"
                                type="default"
                            >
                                Fade This Coin? 500 Lashes For Conduct
                                Unbecoming A Black Man
                            </PageTitle>
                            {/* <Content className="text-center" alignment="center">
                                <p>
                                    Our comprehensive Notion template designed
                                    to empower you on your meal planning and
                                    nutrition journey. With our user-friendly
                                    features, customizable layouts, and seamless
                                    recipe integration, taking control of your
                                    meals has never been easier.
                                </p>
                            </Content> */}
                            <MotionBTTContainer
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="page-banner--video">
                                    <iframe
                                        width="1024"
                                        height="680"
                                        src="https://www.youtube.com/embed/ZbEA0Z-0pi8?si=F_zPdRucgeIME7Rc&amp?autoplay=1&enablejsapi=1"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        style={{
                                            maxWidth: "100%", // Ensure the iframe is not larger than its container
                                            maxHeight: "100%" // Constrain the height to the container's height
                                        }}
                                    />
                                </div>
                            </MotionBTTContainer>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                This is what holders have to say about $UMAR
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                We&apos;ve got the answers you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
