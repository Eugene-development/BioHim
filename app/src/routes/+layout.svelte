<script>
    import "../app.css";
    import {Header_v1, Header_v2, Footer_v1} from "symax/ui/broker"
    export let data
</script>

<Header_v1 {...data.content_Header_v1}/>
<Header_v2 {...data.content_Header_v2}/>
    <main>
        <slot />
    </main>
<Footer_v1 {...data.content_Footer_v1}/>
