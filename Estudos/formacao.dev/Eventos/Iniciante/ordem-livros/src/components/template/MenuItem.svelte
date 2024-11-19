<script>
    export let href = "/"
    export let texto = ""
</script>

<li>
    <a {href}
        class="
        flex gap-2 items-center cursor-pointer px-4 py-2
        text-zinc-300 hover:underline hover:text-white
        hover:bg-white/10">
        <span>{texto}</span>
    </a>
</li>