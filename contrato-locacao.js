<script src="https://cdnjs.cloudflare.com/ajax/libs/docx/7.7.0/docx.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
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

    window.laudoText = `
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
Edson Viana Esmecelato
Corretor de Imóveis - CRECI 44.628 – 6ª Região (PR)
Avaliador Imobiliário - CNAI 47.536 – DF
Perito Judicial habilitado no TJPR
Rua Francisco Rodrigues de Souza, 148 – Terra Roxa – PR
E-mail: esmecelatocorretor@gmail.com
WhatsApp: (44) 99906-1434
`;

    document.getElementById("resultado").textContent = window.laudoText;
  });

  function gerarWord() {
    const { Document, Packer, Paragraph, TextRun } = window.docx;

    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({ children: [new TextRun({ text: window.laudoText, break: 1 })] })
        ]
      }]
    });

    Packer.toBlob(doc).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Laudo_Avaliacao.docx";
      a.click();
    });
  }

  function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(window.laudoText, 180);
    doc.text(lines, 10, 10);
    doc.save("Laudo_Avaliacao.pdf");
  }
</script>
