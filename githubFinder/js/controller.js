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

    adicionaRepositorio()
    {
        let repoUser = new UserModel()
        repoUser.buscaRepositorio( dadosRepos )

        let repoView = new UserView()
        repoView.renderView(repoUser)
    }
}


let controller = new UserController();

buscador.addEventListener('click', controller.adicionaPerfil);

let login = document.querySelector('#buscaUsuario');