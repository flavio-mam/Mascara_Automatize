function min(id) {
  return document.getElementById(id).value.toLowerCase();
}

function gerar() {
  const texto = `###ENCERRAMENTO DE CPE###

&&& MAMINFO

Nº DA RAT: ${min('rat')}
CIRCUITO: ${min('circuito')}
MODELO DO CPE: ${min('modelo')}
Nº DE SÉRIE DO CPE: ${min('serie')}
${min('equipamento')}
CIENTE NO LOCAL: SR(A) ${min('ciente')}
SUPORTE PELO ANALISTA: ${min('analista')}
REALIZADO PELO TÉCNICO: ${min('tecnico')}
FOI REALIZADO TESTE FINAL COM O EQUIPAMENTO DO CLIENTE? ${min('teste')}
TESTADO NA REDE GERENCIADA COM: ${min('gerenciada')}
CONTATO: ${min('contato')}
CONFIGURAÇÕES EXECUTADAS: ${min('config')}
PRODUTIVO: ${min('produtivo')}
MOTIVO: ${min('motivo')}`;

  document.getElementById("resultado").innerText = texto.toUpperCase();
  document.getElementById("container").style.display = "block";
}

function copiarTexto() {
  const texto = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(texto).then(() => {
    const btn = document.getElementById("copiar");
    btn.innerText = "Copiado!";
    setTimeout(() => {
      btn.innerText = "Copiar";
    }, 2000);
  }).catch(err => {
    alert("Erro ao copiar: " + err);
  });
}
