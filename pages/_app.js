import "@styles/globals.scss";
import "flowbite/dist/flowbite.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.min.js"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />
        </>
    );
}
