<script>
    import "../app.css";
    import { Mobile_Menu_v1, Header_v1, Header_v2, Footer_v1 } from "symax/ui/broker"
    export let data
</script>

<Mobile_Menu_v1 { ...data.mobile_menu } />

<Header_v1 {...data.content_Header_v1}/>
<Header_v2 {...data.content_Header_v2}/>
    <main>
        <slot />
    </main>
<Footer_v1 {...data.content_Footer_v1}/>
