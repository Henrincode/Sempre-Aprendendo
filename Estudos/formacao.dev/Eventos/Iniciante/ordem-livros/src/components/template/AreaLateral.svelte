<script>
    import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";

</script>
<aside class="flex flex-col self-start
    border border-zinc-800 p-5 gap-10 rounded-md w-72">
    <Menu titulo = "Navegação">
        <MenuItem texto = "Início" href = "/" />
        <MenuItem texto = "Personagens" href = "/" />
        <MenuItem texto = "Autores" href = "/autores" />
        <MenuItem texto = "Séries" href = "/" />
    </Menu>
    <Menu titulo = "Principais Autores">
        <MenuItem texto = "J.K. Rowling" href = "/" />
        <MenuItem texto = "J.R.R. Tolkien" href = "/" />
        <MenuItem texto = "George R.R. Martin" href = "/autores/george-martin" />
    </Menu>
    <Menu titulo = "Outras Categorias">
        <MenuItem texto = "Últimas Notícias" href = "/" />
        <MenuItem texto = "Séries Populares" href = "/" />
        <MenuItem texto = "Facebook" href = "/" />
        <MenuItem texto = "Instagram" href = "/" />
        <MenuItem texto = "Youtube" href = "/" />
    </Menu>
</aside>