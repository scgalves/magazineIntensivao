import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  // Laço para montar um html, inserindo dinamicamente cada produto do catálogo
  for (const produtoCatalogo of catalogo) {
    /* w-48 = largura do cartão
    m-2 = margem vertical e horizontal
    flex-col = em coluna
    p-2 = padding
    justify-between = alinhamento justificado
    shadow-xl = sombreamento
    shadow-slate-400 = cor do sombreamento
    rounded-lg = arredondamento e largura do mesmo
    group = grupo 
    group-hover: scale-110 = zoom na imagem ao passar o mouse
    duration-300 = tempo do zoom na imagem
    */
    const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }" id="card-produto-${produtoCatalogo.id}">
      <img
      src="./assets/img/${produtoCatalogo.imagem}"
      alt="Produto 1 do Magazine Hashtag"
      class="group-hover:scale-110 duration-300 my-3 rounded-lg"
      />
      <p class='text-sm'>${produtoCatalogo.marca}</p>
      <p class='text-sm'>${produtoCatalogo.nome}</p>
      <p class='text-sm'>$${produtoCatalogo.preco}</p>
      <button id='adicionar-${
        produtoCatalogo.id
      }' class='bg-slate-950 hover:bg-slate-700 text-slate-200'
      ><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;
    // Acrescenta um conteúdo html (cartaoProduto) ao container-produto
    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
