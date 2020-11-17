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

    getRepositorios()
    {
        return this._repositorios
    }
}


class UserView
{
    constructor(){console.log('criação view')}

    renderView (model)
    {
        let avatar = document.querySelector("#imgUser");
        avatar.src = model.getAvatar();
        
        let login = document.querySelector('#loginUser');
        login.textContent = model.getLogin();
        
    
        let paginaUsuario = document.querySelector('#pageUser');
        paginaUsuario.textContent = model.getPageUrl();
        paginaUsuario.href = model.getPageUrl();
        

        let repositorio = document.querySelector('#repositorios');
        repositorio.textContent = model.getRepositorios();
        repositorio.href = model.getPageUrl();
        
    }
}

class UserController
{
    constructor() {console.log('controller criada')}

    adicionaPerfil()
    {
        let user = new UserModel()
        user.buscaPerfil()

        let view = new UserView()
        view.renderView(user)

    }
}

let controller = new UserController()

buscador.addEventListener('click', controller.adicionaPerfil)

let login = document.querySelector('#buscaUsuario')
