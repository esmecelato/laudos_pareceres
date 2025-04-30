document.getElementById("contractGenerator").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura dos dados do formulário
    const ownerName = document.getElementById("ownerName").value;
    const nationality = document.getElementById("nationality").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const occupation = document.getElementById("occupation").value;
    const rgNumber = document.getElementById("rgNumber").value;
    const cpfNumber = document.getElementById("cpfNumber").value;
    const propertyAddressFull = document.getElementById("propertyAddressFull").value;

    const tenantName = document.getElementById("tenantName").value;
    const tenantNationality = document.getElementById("tenantNationality").value;
    const tenantMaritalStatus = document.getElementById("tenantMaritalStatus").value;
    const tenantOccupation = document.getElementById("tenantOccupation").value;
    const tenantRg = document.getElementById("tenantRg").value;
    const tenantCpf = document.getElementById("tenantCpf").value;

    const propertyType = document.getElementById("propertyType").value;
    const propertyAddressFullImovel = document.getElementById("propertyAddressFullImovel").value;
    const rentalValue = document.getElementById("rentalValue").value;
    const rentalValueText = document.getElementById("rentalValueText").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const securityDeposit = document.getElementById("securityDeposit").value;
    const reajuste = document.getElementById("reajuste").value;
    const signatureDate = document.getElementById("signatureDate").value;

    // Formatação da data de assinatura para exibição
    const assinaturaFormatada = new Date(signatureDate).toLocaleDateString("pt-BR", {
        day: '2-digit', month: 'long', year: 'numeric'
    });

    // Geração do texto do contrato
    const contrato = `
<h2>CONTRATO DE LOCAÇÃO RESIDENCIAL</h2>

<strong>IDENTIFICAÇÃO DAS PARTES</strong><br>
LOCADOR: ${ownerName}, ${nationality}, ${occupation}, ${maritalStatus}, portador do RG nº ${rgNumber}, inscrito no CPF nº ${cpfNumber}, residente à ${propertyAddressFull}.<br><br>

LOCATÁRIA: ${tenantName}, ${tenantNationality}, ${tenantOccupation}, ${tenantMaritalStatus}, portador(a) do RG nº ${tenantRg}, inscrito(a) no CPF nº ${tenantCpf}, residente em Terra Roxa PR.<br><br>

<strong>DO IMÓVEL</strong><br>
O LOCADOR dá em locação ao LOCATÁRIO o imóvel ${propertyType}, situado à ${propertyAddressFullImovel}.<br><br>

<strong>DO PRAZO</strong><br>
O prazo de locação é de 12 (doze) meses, com início em ${startDate} e término em ${endDate}.<br><br>

<strong>DA RENOVAÇÃO</strong><br>
A renovação será automática para mais 12 (doze) meses, se nenhuma das partes se manifestar em contrário.<br><br>

<strong>DO ALUGUEL</strong><br>
O aluguel mensal é de R$ ${rentalValue} (${rentalValueText}), a ser pago até o dia 05 de cada mês mediante depósito em conta indicada pelo LOCADOR ou via Pix (CPF).<br><br>

<strong>DO REAJUSTE</strong><br>
O aluguel será reajustado conforme periodicidade ${reajuste}.<br><br>

<strong>DAS DESPESAS</strong><br>
O LOCATÁRIO é responsável pelas despesas de consumo: água, energia elétrica, esgoto e taxas relativas ao imóvel.<br><br>

<strong>DO USO DO IMÓVEL</strong><br>
O imóvel será destinado exclusivamente à residência do LOCATÁRIO e familiares, sendo vedada a sublocação ou cessão sem autorização expressa do LOCADOR.<br><br>

<strong>DA CONSERVAÇÃO</strong><br>
O LOCATÁRIO compromete-se a conservar o imóvel em bom estado, respondendo por danos decorrentes de uso indevido.<br><br>

<strong>DA MULTA POR INADIMPLÊNCIA</strong><br>
O atraso no pagamento do aluguel acarretará multa de 10%, juros de 1% ao mês e correção monetária.<br><br>

<strong>DA RESCISÃO</strong><br>
Em caso de descumprimento ou rescisão antecipada, a parte infratora pagará multa equivalente a três aluguéis mensais.<br><br>

<strong>DAS COMUNICAÇÕES</strong><br>
Todas as comunicações deverão ser feitas por escrito.<br><br>

<strong>DO FORO</strong><br>
Fica eleito o foro da Comarca de Terra Roxa - PR para dirimir quaisquer dúvidas oriundas deste contrato.<br><br>

Terra Roxa - PR, ${assinaturaFormatada}.<br><br>

_________________________________________<br>
LOCADOR: ${ownerName}<br><br>

_________________________________________<br>
LOCATÁRIO: ${tenantName}<br><br>

<strong>Testemunhas:</strong><br>
1. Nome: ____________________________________ CPF: ______________________<br>
2. Nome: ____________________________________ CPF: ______________________
`;

    // Exibição do contrato gerado
    document.getElementById("generatedContract").innerHTML = contrato;
});
