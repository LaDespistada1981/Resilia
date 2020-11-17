class UserModel
{
    constructor()
    {
        this._avatar = '';
        this._login = '';
        this._nome = '';
        this._pageUrl = '';
        this._repositorios = '';
    }
    
    buscaPerfil()
    {
        let usuario = document.querySelector('#buscaUsuario').value;
        console.log(usuario)
        
        let request = new XMLHttpRequest();
        
        request.open('GET',`https://api.github.com/users/${usuario}`, false)
        
        request.addEventListener('load', () =>
        {
            if (request.status == 200)
            {
                let dados = this._processaResponse (request.responseText)
                
                this._atualiza( dados )
            }
        });
        request.send()
        console.log(request)
    }


    buscaRepositorio( usuario )
    {   
        console.log('Model do repositório está funcionando')

        let repositorios = document.querySelector('#repos').value;
        console.log(repositorios)

        let requestRepo = new XMLHttpRequest(repos);
        
        requestRepo.open('GET',`https://api.github.com/users/${usuario}/repos`, false)
        
        requestRepo.addEventListener('load', () =>
        {
            console.log('request do repositório está funcionando')
            if (requestRepo.status == 200)
            {
                let dadosRepositorios = this._processaResponse (requestRepo.responseText)

                this._repositorios  = dadosRepositorios
                
                console.log( this._repositorios )
            }
        });
        request.send()
        console.log(requestRepo)
    }
    
    _processaResponse( responseString )
    {
        console.log( 'model atualizando')
        let response = JSON.parse( responseString );
        
        return response
        
    }
    
    _atualiza ( dados )
    {
        console.log('atualizando dados')
        this._avatar = dados.avatar_url;
        this._login = dados.login;
        this._nome = dados.name;
        this._pageUrl = dados.html_url;
        this._repositorios = dados.repos_url;
    }
    
    getAvatar()
    {
        return this._avatar
    }
    
    getLogin()
    {
        return this._login
    }
    
    getPageUrl()
    {
        return this._pageUrl
    }
    
    // getRepositorios()
    // {
    //     return this._repositorios
    // }
}



class ReposModel
{
    constructor()
    {
        this._repositorios = '';
    }
    
    
    
    _processaResponse( responseString )
    {
        console.log( 'model atualizando')
        let responseRepos = JSON.parse( responseString );
        
        return responseRepos
        
    }
    
    _atualiza ( dadosRepositorios )
    {
        console.log('atualizando dados dos repositórios')
        
        this._repositorios = dadosRepositorios.html_url;
    }
    
    getRepositorios()
    {
        return this._repositorios
    }
}