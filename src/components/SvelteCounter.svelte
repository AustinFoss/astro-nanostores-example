<script lang="js">

    import { number, incrementNumber, decrementNumber } from '../stores/main';
    
</script>
    
    
<div id="NumberCounter">

    <h2>Svelte Counter</h2>

    <button
        on:click={() => {decrementNumber()}} id="decrementNumber"
        class="btn"
    >
        -
    </button>
    <span>{$number}</span>
    <button 
        on:click={() => {incrementNumber()}} id="incrementNumber"
        class="btn"
    >
        +
    </button>

</div>