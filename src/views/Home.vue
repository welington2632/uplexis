<template>
  <div class="home">
    <img src="../assets/banner_1.png" alt="home banner" class="home__banner" />
    <nav class="home__menu">
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Todos"
        :active="menuActiveItem === 'Todos'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Profissional"
        :active="menuActiveItem === 'Profissional'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Sócio Ambiental"
        :active="menuActiveItem === 'Sócio Ambiental'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Jurídico"
        :active="menuActiveItem === 'Jurídico'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Listas Restritivas"
        :active="menuActiveItem === 'Listas Restritivas'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Mídia / Internet"
        :active="menuActiveItem === 'Mídia / Internet'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Bens e Imóveis"
        :active="menuActiveItem === 'Bens e Imóveis'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Cadastro"
        :active="menuActiveItem === 'Cadastro'"
      />
      <SharedMenuItem
        @itemSelecionado="changeSelectItemMenu"
        name="Financeiro"
        :active="menuActiveItem === 'Financeiro'"
      />
    </nav>
    <SharedCardOrder text="Ordenar" @changed="orderChange" />
    <section class="home__product-cards">
      <SharedCardProduct
        v-for="produto in retornarProdutosFiltrados"
        :key="produto.id"
        :id="produto.id"
        :name="produto.name"
        :description="produto.description"
        :valor="40"
      />
    </section>
    <div class="modal" :class="{ displayNone: !modalActive }">
      <div class="modal__content">
        <h4>VUEX</h4>
        <ul>
          <li v-for="{ id, name } in avaiableProducts" :key="id">
            {{ id }} | {{ name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SharedMenuItem from '../components/SharedMenuItem.vue';
import SharedCardOrder from '../components/SharedCardOrder.vue';
import SharedCardProduct from '../components/SharedCardProduct.vue';

export default {
  name: 'Home',
  components: {
    SharedMenuItem,
    SharedCardOrder,
    SharedCardProduct,
  },
  data() {
    return {
      menuActiveItem: 'Todos', // Item atual do menu ativo
      produtos: [], // Produtos disponíveis
      filtro: {
        // Filtro responsável pela exibição dos produtos
        name: 'Todos',
      },
      modalActive: false,
    };
  },
  methods: {
    // Sempre que um item do menu for clicado, esta opção será ativada
    // Função altera a cor do item selecionado e altera o fitlro do array de produtos
    changeSelectItemMenu(nameItem) {
      this.menuActiveItem = nameItem;
      this.filtro.name = this.menuActiveItem;
    },
    // Função responsável por fazer o GET da API para consulta dos produtos disponíveis
    fetchProduto() {
      axios.get('https://demo3241810.mockable.io/sources').then((response) => {
        this.produtos = response.data.sources;
      });
    },
    // Função ativada sempre que o "ORDENAR" for alterado, responsável por realizar os filtros
    orderChange(value) {
      const type = {
        lancamento: this.filterId,
        'a-z': this.filterAZ,
      };
      if (typeof type[value] === 'function') type[value](this.produtos);
    },

    // FILTROS

    // Filtro responsável por dar um sort nos cards, infileirando eles na ordem a-z
    filterAZ(array) {
      this.produtos = array.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    },

    // Filtro responsável por ordenar por ID (ordem crescente)
    filterId(array) {
      this.produtos = array.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    toggleModal(e) {
      if (e.key === 'Escape') {
        this.modalActive = !this.modalActive;
      }
    },
  },
  computed: {
    // Computed responsável por trazer apenas os cards de acordo com o tipo selecionado
    retornarProdutosFiltrados() {
      if (this.filtro.name === 'Todos') return this.produtos;
      const { name } = this.filtro;
      const produtosFiltrados = this.produtos.filter(
        (produto) => produto.name === name,
      );
      return produtosFiltrados;
    },
    avaiableProducts() {
      return this.$store.state.avaiableProducts;
    },
  },

  // Chama API após o componente ser montado
  mounted() {
    this.fetchProduto();
  },
  created() {
    window.addEventListener('keydown', this.toggleModal);
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__banner {
    margin: auto;
    display: block;
    width: 100%;
  }
  &__menu {
    background-color: #f2f2f2;
    width: 95%;
    margin: 25px auto;
    border-radius: 5px;
    border: 1px solid #ececec;
    display: flex;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
  }
  &__product-cards {
    width: 95%;
    margin: 25px auto 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    * {
      width: 23%;
      margin: 25px 0;
    }
    @media (max-width: 1279px) {
      * {
        width: 32%;
      }
    }
    @media (max-width: 1023px) {
      * {
        width: 45%;
      }
    }
    @media (max-width: 767px) {
      * {
        width: 90%;
        margin: 15px auto;
      }
    }
  }
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.4);
  &__content {
    background: white;
    width: 40%;
    height: 50%;
    text-align: center;
    border-radius: 10px;
  }
}
.displayNone {
  display: none !important;
}
</style>
