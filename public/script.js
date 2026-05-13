// ==========================================
// B.1. Definição dos dados (JSON)
// ==========================================
const catalogo = [
    { id: 1, titulo: "The Batman", tipo: "filme", ano: 2022, generos: ["Ação", "Crime"], nota: 8.5, assistido: true },
    { id: 2, titulo: "Succession", tipo: "serie", ano: 2018, generos: ["Drama"], nota: 9.4, assistido: true },
    { id: 3, titulo: "Inception", tipo: "filme", ano: 2010, generos: ["Ficção Científica", "Ação"], nota: 8.8, assistido: false },
    { id: 4, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Drama", "Comédia"], nota: 9.1, assistido: true },
    { id: 5, titulo: "Duna: Parte 2", tipo: "filme", ano: 2024, generos: ["Ficção Científica", "Aventura"], nota: 9.0, assistido: false },
    { id: 6, titulo: "Dark", tipo: "serie", ano: 2017, generos: ["Mistério", "Sci-Fi"], nota: 8.9, assistido: true }
];

// ==========================================
// B.2. Acesso e leitura dos dados
// ==========================================
console.log("Catálogo Completo:", catalogo);

// Título do primeiro item
console.log("Primeiro item:", catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

// ==========================================
// B.4. Saída na tela (DOM) e Cálculos
// ==========================================

const outputDiv = document.getElementById('output');

// Cálculos de quantidades
const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;
const naoAssistidos = catalogo.filter(item => !item.assistido).length;

// Média de notas
const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = (somaNotas / totalItens).toFixed(1);

// Ranking (Top 3)
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

// Renderização no HTML
outputDiv.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <ul>
        <li><strong>Total de itens:</strong> ${totalItens}</li>
        <li><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</li>
        <li><strong>Não assistidos:</strong> ${naoAssistidos}</li>
        <li><strong>Média geral de notas:</strong> ${mediaGeral}</li>
    </ul>

    <h3>Top 3 Ranking</h3>
    <ol>
        ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join('')}
    </ol>
`;