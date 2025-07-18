import { useRef } from 'react';

export default function Counter() {
    const clickCount = useRef(0);

    const handleClick = () => {
        clickCount.current++;
        console.log("Kliknięć:", clickCount.current);
    };

    return <button onClick={handleClick}>Kliknij mnie</button>;
}


