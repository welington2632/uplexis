<template>
  <font-awesome-icon :icon="getIcon" />
</template>

<script>
export default {
  name: '',
  props: {
    name: String,
  },
  computed: {
    getIcon() {
      switch (this.name) {
        case 'Todos':
          return 'globe';
        case 'Profissional':
          return 'briefcase';
        case 'Reguladores':
          return 'landmark';
        case 'Sócio Ambiental':
          return 'tree';
        case 'Jurídico':
          return 'gavel';
        case 'Listas Restritivas':
          return 'ban';
        case 'Mídia / Internet':
          return 'globe-americas';
        case 'Bens e Imóveis':
          return 'gem';
        case 'Cadastro':
          return 'male';
        case 'Financeiro':
          return 'piggy-bank';
        case 'Diários Oficiais':
          return 'newspaper';
        default: {
          return false;
        }
      }
    },
  },
};
</script>
