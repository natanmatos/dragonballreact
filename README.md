# DragonBall Card List React

Projeto no qual mostra uma lista de card dos personagens e planetas de DragonBall. O projeto necessita do [Node.js](https://nodejs.org/) para ser executado.

### Instalação e execução

Clone o projeto

```sh
$ git clone https://github.com/natanmatos/dragonballreact.git
```

Entre na pasta do projeto e instale as dependências

```sh
$ npm install
```

Feito os passos anteriores é só rodar o projeto

```sh
$ npm start
```

### Decisões

Decidi em não utilizar de componentes prontos (exceto o drawer) por perceber que o projeto é simples e que eu teria uma melhor experiência de layout em fazendo do zero com minhas escolhas. Na tela de planetas, para mostrar os residentes decidi colocar para aparecer em um drawer, fica mais rápido de visualizar a lista.

### Tecnologias

Tecnologias utilizadas no projeto

- [ReactJS](https://reactjs.org) - Tecnologia base para desenvolver o projeto
- [Axios](https://github.com/axios/axios) - Realizar requisições para a [api](https://dragon-ball-api.herokuapp.com/)
- [Ant Design](https://ant.design) - Sistema de design com componentes prontos em React que facilita no desenvolvimento. No projeto foi utilizado somente o componente [Drawer](https://ant.design/components/drawer).
- [Styled Components](https://styled-components.com/) - Biblioteca que permite usar estilos ao nível de componente. Com uma curva de fácil aprendizagem e o código fica mais organiado e performático.

## Licença

MIT
