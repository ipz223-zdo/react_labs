import { useState } from 'react';

function useClipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy text: ", error);
            setIsCopied(false);
        }
    };

    return { isCopied, copyToClipboard };
}

export default useClipboard;