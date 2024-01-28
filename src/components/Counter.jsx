import { useStore } from '@nanostores/solid';
import { number, incrementNumber, decrementNumber } from '../stores/main';

export default function() {

    const $number = useStore(number);

    return (<>
        <button onClick={decrementNumber}>-</button>
        <span>{$number()}</span>
        <button onClick={incrementNumber}>+</button>
    </>);
}