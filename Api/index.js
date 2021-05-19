require('dotenv').config(); 
const express = require('express');
const axios = require('axios');

const app = express(); 
const port = process.env.PORT || 3000;
const github = axios.default.create({
  baseURL: 'https://api.github.com',
});

// endpoint para pegar os repositórios com a api do github
// precisa ser async para esperar o retorno da outra api
app.get('/repositories', async (req, res, _next) => {
  try{
    const { language, quantity } = req.query;
    //console.log para mostrar os dados que vieram na query
    console.log("language = " + language);
    console.log("quantity = " + quantity);
    
    let page = 1;
    let repositories = [];

    while(true)
    {
      // requisição para a api do github
      const response = await github.get('/orgs/takenet/repos', {
        params:{
          per_page: 100,
          sort: 'created',
          page,
        },
      });

      repositories = response.data;
      page++;
      
      if (repositories.length < 100)
      {
        /* para de fazer requisições ao chegar nos
        últimos resultados (primeiros repositórios)*/
        break;
      }
    }

    const fiveRepositories = [];
    // primeiros repos criados no começo do array
    repositories.reverse();
    
    for (const repository of repositories)
    {
      if(repository.language === language)
      {
        fiveRepositories.push(repository);
      }
      if(fiveRepositories.length == quantity)
      {
        break;
      }
    }    

    return res.json(fiveRepositories);
    
  }catch(err)
  {
    console.error('error: ', err);
  }
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
