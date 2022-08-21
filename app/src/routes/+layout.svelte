<script>
    import "../app.css";
    import {Header_v1} from "symax/ui/broker"
    export let data
    console.log(data)
</script>



<Header_v1 {...data}/>
<main>
    <slot />
</main>
