import React from "react";

const GAnalytics = () => (
    <>
        <script
            async
            src={'https://www.googletagmanager.com/gtag/js?id=G-RNME6PD6CG'}
        />
        <script
            dangerouslySetInnerHTML={{
                __html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RNME6PD6CG',{
                    page_path: window.location.pathname,
                });
                `
            }}
        />
    </>
);

export default GAnalytics