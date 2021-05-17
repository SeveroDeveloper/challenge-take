require('dotenv').config();
const express = require('express');
const axios = require('axios');

// minha api
const app = express(); 
// porta que o servidor está
const port = process.env.APP_PORT || 3000;
// conectando com a api do github
const github = axios.default.create({
  baseURL: 'https://api.github.com',
});
// função para pegar os repositórios com a api do github
// precisa ser async para esperar o retorno da outra api
app.get('/repositories', async (req, res, next) => {
  try{
    //marca a página para navegar até a última (repos mais antigos)
    let page = 1;
    //armazena o retorno do github
    let repositories = [];
    while(true)
    {
      //fazendo requisição via axios
      const response = await github.get('/orgs/takenet/repos', {
        //parâmetros da requisição
        params:{
          per_page: 100,
          sort: 'created',
          page,
        },
      });
      repositories = response.data;
      page++;
      // chegou a ultima página
      if (repositories.length < 100)
      {
        break;
      }
    }
    const fiveRepositories = [];
    // deixando os primeiros criados no começo
    repositories.reverse();
    
    /*for (const repository of repositories)
    {
      if(fiveRepositories.length == 5)
      {
        break;
      }
    }*/

    return res.json(repositories);
  }catch(err)
  {
    console.error('error: ', err);
  }
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
