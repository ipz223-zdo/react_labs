import React from 'react';
import useClipboard from '../hooks/useClipboard';

function ClipboardComponent() {
    const { isCopied, copyToClipboard } = useClipboard();
    const textToCopy = "Це текст, який потрібно скопіювати";

    return (
        <div className={"centerBlock"}>
            <p>{textToCopy}</p>
            <button onClick={() => copyToClipboard(textToCopy)}>
                {isCopied ? "Скопійовано!" : "Скопіювати текст"}
            </button>
        </div>
    );
}

export default ClipboardComponent;