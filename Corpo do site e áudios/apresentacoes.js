/* =====================================================================
   Arquivo onde eu cadastro as apresentações e os áudios.
   É o único arquivo que eu preciso editar no dia a dia. O index.html
   eu não preciso mexer.

   Como funciona:
   - Cada apresentação é um bloco entre chaves { ... } dentro da lista.
   - Cada slide é uma linha dentro de "slides", com o título e o caminho
     do arquivo de áudio.
   - Os arquivos de áudio ficam na pasta "audios", com uma subpasta por aula.

   Para adicionar uma apresentação nova:
   1. Copio um bloco inteiro (de "{" até "},") e colo logo abaixo.
   2. Troco o "id": sem espaços, sem acentos, só letras minúsculas,
      números e hífen. Ele vira o final do link, por exemplo ...#aula-03
   3. Troco o título, a descrição e a lista de slides.
   4. Crio a pasta audios/aula-03 e coloco lá os arquivos de áudio.

   Para adicionar um slide:
   - Copio uma linha { titulo: "...", arquivo: "..." }, colo embaixo
     e mudo o título e o nome do arquivo.
   - Cuidado com as vírgulas no final de cada linha e com as aspas.

   Para trocar um áudio:
   - Regravo e salvo com o mesmo nome, na mesma pasta, substituindo o arquivo.
   - Não preciso mexer neste arquivo.

   Lembretes:
   - O nome do arquivo precisa ser igual ao que está escrito aqui,
     inclusive letras maiúsculas e minúsculas. Uso nomes simples: 01.mp3, 02.mp3...
   - Evito acentos e espaços nos nomes dos arquivos.
   - A ordem dos slides é a ordem das linhas.
   ===================================================================== */

const APRESENTACOES = [
  {
    id: "aula-01",
    titulo: "Aula 1: Introdução à disciplina",
    descricao: "Apresentação geral da disciplina e do plano de ensino.",
    slides: [
      { titulo: "Abertura e visão geral da aula", arquivo: "audios/aula-01/00.mp3" },
      { titulo: "Slide 1: Título da apresentação", arquivo: "audios/aula-01/01.mp3" },
      { titulo: "Slide 2: Objetivos da aula", arquivo: "audios/aula-01/02.mp3" },
      { titulo: "Slide 3: Gráfico de exemplo", arquivo: "audios/aula-01/03.mp3" },
    ],
  },

  {
    id: "aula-02",
    titulo: "Aula 2: Segundo tema",
    descricao: "Descrição curta da segunda aula.",
    slides: [
      { titulo: "Abertura e visão geral da aula", arquivo: "audios/aula-02/00.mp3" },
      { titulo: "Slide 1: Título da apresentação", arquivo: "audios/aula-02/01.mp3" },
      { titulo: "Slide 2: Conceitos principais", arquivo: "audios/aula-02/02.mp3" },
    ],
  },
];