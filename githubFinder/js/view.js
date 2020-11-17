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
        repositorio.href = model.getRepositorios();
    }



    renderView ( dadosRepos )
    {
       console.log('Repositório está na view')
        console.log(dadosRepos._repositorios)

        let reposResult = dadosRepos._repositorios

        for(let repo of reposResult)
        {
            let cardDiv = document.createElement('div')
            cardDiv.classList.add('reposUsuario')

            let nomeRepositorio = document.createElement('p')
            nomeRepositorio.classList.add('reposerName')
            nomeRepositorio.textContent = repo.name
            cardDiv.appendChild(nomeRepositorio)

            let linkRepos = document.createElement('a')
            linkRepos.classList.add('linkRep')
            linkRepos.href = repo.html_url
            cardDiv.appendChild(linkRepos)
        }
    }
}