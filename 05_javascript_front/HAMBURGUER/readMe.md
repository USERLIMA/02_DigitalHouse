![GitHub followers](https://img.shields.io/github/followers/USERLIMA?label=USERLIMA%20FOLLOWERS&style=social)

<h1 align="center">Dicas de JavaScript no Front</h1>

<h1 align="center", href="#GIT-HUB">
    <a href="https://github.com/USERLIMA">🔗 GIT HUB</a>
</h1>

<p align="center">🚀 Dicas de JS no front </p>

<h2 href="#js">1 - localizando um id no HTML</h2>
<pre class=" language-js" tabindex="0">
    <code class=" language-js">document.getElementById("id");
</code></pre>

<h2 href="#js">2 - localizando uma classe no HTML</h2>
<pre class=" language-js" tabindex="0">
    <code class=" language-js">document.getElementByClassName("Classe") ou document.getElementsByClassName("Classe");
</code></pre>

<h2 href="#js">3 - localizando uma tag no HTML</h2>
<pre class=" language-js" tabindex="0">
    <code class=" language-js">document.getElementsByTagName("Classe");
</code></pre>

<h2 href="#js">4 - localizando pelo nome no HTML</h2>
<pre class=" language-js" tabindex="0">
    <code class=" language-js">document.getElementsByName("nome");
</code></pre>

<h2 href="#js">5 - localizando um elemento no HTML e alterando suas propriedades</h2>
<pre class=" language-js" tabindex="0">
    <code class=" language-js">window.document.body.style.backgroundColor = '#ffffff';
</code></pre>

<h2 href="#js">6 - Query selector c/ filtros</h2>
<pre class=" language-js" tabindex="0">
<code class=" language-js">document.querySelector("article > p")[0].innerText = 'Hello World';
</code></pre>

<h2 href="#js">7 - Adicionando campos</h2>
<pre class=" language-js" tabindex="0">
<code class=" language-js">document.getElementsByTagName("TagName")[0].ClassList.add("article");
</code></pre>

<h2 href="#js">8 - toggle</h2>
<pre class=" language-js" tabindex="0">
<code class=" language-js">document.getElementsByTagName("TagName")[0].ClassList.toggle("article");
</code></pre>

<h2 href="#js">9 - removendo arquivos</h2>
<pre class=" language-js" tabindex="0">
<code class=" language-js">document.getElementsByTagName("TagName")[0].ClassList.remove("article");
</code></pre>
