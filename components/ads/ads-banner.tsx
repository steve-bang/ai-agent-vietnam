import { GoogleAdsenseClientId } from '@/data/google-ads-constants';
import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const AdBanner = (props) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle adbanner-customize"
            style={{
                display: 'block',
                overflow: 'hidden',
            }}
            data-ad-client={GoogleAdsenseClientId}
            {...props}
        />
    );
};
export default AdBanner;