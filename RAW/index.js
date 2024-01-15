console.log("porra");

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Obtém o termo de pesquisa digitado (em letras minúsculas)
  
    // Verifique o termo de pesquisa e redirecione para a página correspondente
    if (searchTerm === 'edition x1') {
      window.location.href = 'file:///Users/usuario/Desktop/RAW/produto1.html'; // Substitua pelo URL real da página do produto
    } else if (searchTerm === 'aurora gold') {
      window.location.href = 'file:///Users/usuario/Desktop/RAW/produto2.html'; // Substitua pelo URL real da página do outro produto
    } else if (searchTerm == 'gold supreme'){
        window.location.href = 'file:///Users/usuario/Desktop/RAW/produto3.html';
    }
    else if (searchTerm == 'gold leaf'){
        window.location.href = 'file:///Users/usuario/Desktop/RAW/product4.html';
    }
    else if (searchTerm == 'gold spectrum'){
        window.location.href = 'file:///Users/usuario/Desktop/RAW/produto5.html';
    }
    else if (searchTerm == 'lv gold leaf'){
        window.location.href = 'file:///Users/usuario/Desktop/RAW/lv1.html';
    }
    
     else {
      // Redirecionar para uma página de resultados de pesquisa ou mostrar uma mensagem de erro se o produto não for encontrado
      alert('Produto não encontrado. Tente novamente.');
      // Ou redirecionar para uma página de resultados de pesquisa genérica:
      // window.location.href = 'pagina_de_resultados_de_pesquisa.html';
    }
  });
  
