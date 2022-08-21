<script>
    import "../app.css";
    import {Header_v1} from "symax/ui/broker"
    export let data
</script>



<Header_v1 {...data.content_Header_v1}/>
<main>
    <slot />
</main>
