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
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
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
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto"
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
                                <div
                                    className="page-banner--video"
                                    style={{
                                        display: "flex", // Use flexbox layout
                                        justifyContent: "center", // Center horizontally
                                        alignItems: "center", // Center vertically
                                        height: "680px" // Set a fixed height for the container
                                    }}
                                >
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
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
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
