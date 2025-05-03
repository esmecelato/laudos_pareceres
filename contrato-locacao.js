document.getElementById("laudoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const processo = document.getElementById("processo").value;
  const juizo = document.getElementById("juizo").value;
  const autor = document.getElementById("autor").value;
  const reu = document.getElementById("reu").value;
  const tipoImovel = document.getElementById("tipoImovel").value;
  const enderecoImovel = document.getElementById("enderecoImovel").value;
  const dataVistoria = document.getElementById("dataVistoria").value;
  const conclusao = document.getElementById("conclusao").value;
  const dataLocal = document.getElementById("dataLocal").value;

  const perito = `
Edson Viana Esmecelato
Corretor de Imóveis - CRECI 44.628 – 6ª Região (PR)
Avaliador Imobiliário - CNAI 47.536 – DF
Perito Judicial habilitado no TJPR
Rua Francisco Rodrigues de Souza, 148 – Terra Roxa – PR
E-mail: esmecelatocorretor@gmail.com
WhatsApp: (44) 99906-1434`;

  const laudo = `
Laudo de Avaliação Judicial
Processo nº: ${processo}
Juízo / Comarca: ${juizo}

Autor: ${autor}
Réu: ${reu}

Tipo de Imóvel: ${tipoImovel}
Endereço do Imóvel: ${enderecoImovel}
Data da Vistoria: ${dataVistoria}

Conclusão Técnica:
${conclusao}

Local e Data: ${dataLocal}

Perito:
${perito}
  `;

  document.getElementById("resultado").textContent = laudo;
});
