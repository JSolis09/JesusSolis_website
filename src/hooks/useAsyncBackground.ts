import { useEffect, useState } from "react";

export default function useAsyncBackground(url?: string) {
    const [src, setSrc] = useState<string>();

    useEffect(() => {
        if (url) {
            const imageLoader = new Image();
            imageLoader.src = url;
            imageLoader.onload = () => {
                setSrc(url);
            };
        }
    }, [url]);

    return url? src : null;
}
