import {useState} from "react";

export default function useBackground() {
    const [background, set] = useState("");

    function setBackground(background: string) {
        const body = document.querySelector('body')!;

        body.style.backgroundImage = `url(${background})`;

        set(background);
    }

    return {
        background,setBackground
    }
}