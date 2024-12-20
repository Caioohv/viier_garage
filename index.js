// let content = require('./content.json')

// const lamps = content.filter(el => el.groups.indexOf(`lamps`) !== -1)

// const headlights = content.filter(el => el.groups.indexOf(`headlights`) !== -1)

// const gol = content.filter(el => el.groups.indexOf(`gol`) !== -1)

import { createApp } from "vue";

createApp({
  data() {
    return {
      filter: "all",
      links: [
        {
          name: "Aileo Z7",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mtiob3m",
          },
          groups: ["headlights", "gol", "projectors"],
          description: "",
        },
        {
          name: "K5C Plus",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mKTy7oK",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "Seta e ré de Led",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mqir2sI",
          },
          groups: ["lamps", "gol"],
          description: "",
        },
        {
          name: "Tela touch com Android Auto e Carplay",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mMO9vC0",
          },
          groups: ["accessories", "gol"],
          description: "",
        },
        {
          name: "Leitor OBD2",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mqCVJ22",
            shopee: "https://s.shopee.com.br/9A311uJXf7",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Dashcam 3 Câmeras",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mLDsa22",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Leitor de pressão de pneus",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mNi9Nxy",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Velocímetro digital OBD2 e GPS",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mPGBX4u",
          },
          groups: ["accessories", "gol"],
          description: "",
        },
        {
          name: "Led de polícia",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mOqgb2M",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Bevinsee - Luz de assoalho RGB",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mq5TbIG",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Manopla esportiva",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mLqpk54",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Luz atmosférica",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mL0A19U",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Tow Strap",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mr3iVFG",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Underglow / Neon",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mPiErBI",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Luz de assoalho RGB",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mLTVEPi",
          },
          groups: ["accessories"],
          description: "",
        },
        {
          name: "Aspirador Wap - Gtw 10",
          links: {
            amazon:
              "https://www.amazon.com.br/dp/B076YLG74Z/ref=cm_sw_r_as_gl_apa_gl_i_1HV2AMH6GWHM0TMB9WYE?linkCode=ml2&tag=viier-20",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Máquina de pressão Wap - Ousada",
          links: {
            amazon: "https://amzn.to/3IsJynA",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Extratora Wap - Spot cleaner",
          links: {
            amazon: "https://amzn.to/49HjVve",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Lâmpada de cabeça",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mONH3wG",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Snowfoam manual",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mMIUisA",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Pincéis para Detalhamento",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mP2p6Og",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Escova de roda",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mMEbTAi",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Panos de Microfibra",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mNEaNiG",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Pincel para parafuso de roda",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mL5zOUa",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Rodo de Silicone",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mLuOsIg",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Limpador de Parabrisa Interno",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mO6rSJi",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Mittus - Shampoo Neutro",
          links: {
            shopee: "https://shope.ee/LRbVmoDpd",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "DetMol - Shampoo (sabão) top no precinho",
          links: {
            shopee: "https://shope.ee/30PjpgGFwu",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Stronder - Limpador de uso geral",
          links: {
            shopee: "https://shope.ee/603LPYmkGg",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Sintra - para painel, portas, etc",
          links: {
            shopee: "https://shope.ee/3L2aFB1ddh",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Pretinho Vintex",
          links: {
            shopee: "https://shope.ee/qLGPxs2VS",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Delet - Borrachas e pneus",
          links: {
            shopee: "https://shope.ee/3AjHm9EoDo",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Alumax - Desencrustante ácido, para motor, caixa de rodas,...",
          links: {
            shopee: "https://shope.ee/6AMtLHD5D0",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Removex - Desengraxante e limpador (usar após Alumax)",
          links: {
            shopee: "https://shope.ee/2q6RNHmjWT",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Cera Blend Liquida (Fácil aplicar)",
          links: {
            shopee: "https://shope.ee/2q6JeBaMM8",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Cera Blend Limpadora",
          links: {
            shopee: "https://shope.ee/9zZUBFl6O4",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Glaco - para cristalizar parabrisa",
          links: {
            shopee: "https://shope.ee/4AbhDvZrIK",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "V-Light - para vitrificar faróis",
          links: {
            shopee: "https://shope.ee/10efMMBOnx",
          },
          groups: ["detailing"],
          description: "",
        },
        {
          name: "Máscara de terrorista",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mss3piy",
          },
          groups: ["generic", "gol"],
          description: "",
        },
        {
          name: "Bolsa para porta malas",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mOsPKKs",
          },
          groups: ["generic", "gol"],
          description: "",
        },
        {
          name: "Bolsa de porta malas",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mM30Mfi",
          },
          groups: ["generic", "gol"],
          description: "",
        },
        {
          name: "Chaveiro de girar",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_msGeda4",
          },
          groups: ["generic", "gol"],
          description: "",
        },
        {
          name: "Aileo Z6 com opção 4300K",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mKQxxqe",
          },
          groups: ["headlights", "projectors"],
          description: "",
        },
        {
          name: "Projetor Aileo - H7, H11, Hb3, Hb4",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_m0tFmbW",
          },
          groups: ["headlights", "projectors"],
          description: "",
        },
        {
          name: "K9C PLUS - Média R$197",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mrwSvmO",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "K8C - Média R$186",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_msww70K",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "K7C - Média R$135",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mLCzxgi",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "K5C PLUS - Média R$110",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mPBQXIM",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "YHKOMS - Opção Econômica, média R$60",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mLfvaBC",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "S14 - Idêntica, média R$50",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mO9In6U",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "Auxito - H3, média R$90",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mKsBT3Q",
          },
          groups: ["headlights"],
          description: "",
        },
        {
          name: "Led placa para Gol G4",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_m0D5zpC",
          },
          groups: ["lamps", "gol"],
          description: "",
        },
        {
          name: "Seta DRL",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_msdnLe8",
          },
          groups: ["lamps"],
          description: "",
        },
        {
          name: "NL Pearl - T10",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mNqv4La",
          },
          groups: ["lamps"],
          description: "",
        },
        {
          name: "MaxGTRS - T10, Pingo gigante",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mNYhQgW",
          },
          groups: ["lamps"],
          description: "",
        },
        {
          name: "MaxGTRS - C5W Torpedo",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mL1Xets",
          },
          groups: ["lamps"],
          description: "",
        },
        {
          name: "NL Pearl - Torpedo C5W",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mKMOwow",
          },
          groups: ["lamps", "gol"],
          description: "",
        },
        {
          name: "Barra de Led",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mPZl6tG",
          },
          groups: ["lamps"],
          description: "",
        },
        {
          name: "Projetor Biled Laser NL Pearl - 40 mil lúmens",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mKPXBiS",
          },
          groups: ["projectors"],
          description: "",
        },
        {
          name: 'Projetor H1 2.5" - Com e sem textura - O mais usado do Brasil',
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mN79iHy",
          },
          groups: ["projectors"],
          description: "",
        },
        {
          name: "Projetor para Milha",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mMQomOO",
          },
          groups: ["projectors"],
          description: "",
        },
        {
          name: "Projetor com DRL (recomendo para milha)",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mqfsfBk",
          },
          groups: ["projectors"],
          description: "",
        },
        {
          name: "Parafusos japoneses (10x)",
          links: {
            aliexpress: "https://s.click.aliexpress.com/e/_mOFsALu",
          },
          groups: ["utility", "gol"],
          description: "",
        },
        {
          name: "Adaptador para seta conjugada",
          links: {
            shopee: "https://shope.ee/4psI3E45XK",
          },
          groups: ["utility", "gol"],
          description: "",
        },
      ],
    };
  },
  methods: {
    getItemsByFilter() {
      if (this.filter == `all`) return this.links;
    }
  }
}).mount("#app");