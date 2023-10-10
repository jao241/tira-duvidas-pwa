## Sobre o projeto
O tira dúvidas é um projeto que tem como objetivo a implementação dos principios das Aplicações Web Progressivas em uma aplicação web, que originalmente não possuia nenhum dos recursos disponíveis.
Abaixo se encontra o passo a passo para a instação, execução e uma sugestão para uma plataforma que possibilita o deploy gratuito de pequenos projetos para propósitos de testes dos princípios.

# Observações - Tecnologias
Este projeto foi elaborado utilizando das seguintes tecnologias e versões:

- NodeJS - 14.21.3
- VueJS - 5.0.8

Recomenda-se utilizar das mesmas versões para uma plena utilização do software.

# Instalação - Tira Dúvidas
Para instalar o projeto localmente primeiramente é nescessário que o mesmo seja clonado, utilizando do comando:

```
https://github.com/jao241/tira-duvidas.git
```

Após baixar o projeto, é necessário a execução do comando para instalação de dependências:

```
npm install
```

Concluindo a instalação, pode-se executar o seguinte comando para executar o projeto:

```
npm run serve
```

O comando acima executará o software e o disponibilizará em ambiente local ou localhost e acesso para máquinas na mesma rede, usando o endereço do host.

# Observações - Uso dos recursos da PWA

Infelizmente, a utilização dos recursos da PWA por meio do acesso na mesma rede, com excessão da máquina onde está sendo executada o script é limitada. Para poder utilizar desses recursos, uma conexão https é necessária. Para que esses recursos possam ser testados, abaixo se encontra um passo a passo de como executar esse projeto em uma plataforma de hospedagem gratuita e que possui um certificado válido.

## Render - Plataforma de hospedagem
A Render é uma plataforma para hospedagem de apps e websites com diversos recursos de integração e com certificados TLS gratuitos. Além de possuir um plano gratuito, com recursos limitados, para que desenvolvedores possam testar pequenos projetos e implementações, abaixo se encontra o link para a plataforma:

- Render: https://render.com/

Após acessar a plataforma, caso seja seu primeiro acesso, clique na opção 'GET STARTED' no menu superior a direita, esse botão encaminhará para a página de cadastro da plataforma, cujo link se encontra abaixo:

- Cadastro: https://dashboard.render.com/register

Existem várias formas de cadastro, como o cadastro utilizando a conta do GitHub, GitLab, Google ou E-mail.

Com o cadastro bem sucedido, uma tela de dashboard deverá ser apresentada. Ao lado esquerdo do seletor com o seu nome de usuário se encontra um botão chamado 'NEW', nele existem diversas opções para deploy para diversos tipos de softwares, a opção que deve ser selecionada é a de 'Static Site', a mesma levará a seguinte página:

- Static Site: https://dashboard.render.com/select-repo?type=static

Aqui é possível escolher entre reposótios privados de sua autoria ou repositórios públicos.

Após selecionar a opção desejada, uma nova página de configuração será apresentada, com opções como o nome do site, a branch ou ramo do projeto a ser executado, o diretório raiz (esse é opcional e não foi utilizado), o comando de build (mantenha o yarn build) e o diretório de publicação, que é a pasta dist. Deve-se observar que existem algumas opções avançadas, mas as mesmas não foram utilizadas. Preenchendo todos os campos obrigatórios e clicando no botão 'Create Static Site' o projeto será hospedado e um link para acesso será disponibilizado.

# PWA - uso é dispositivos móveis
Tendo hospedado o projeto no Render, conforme mostrado o passo a passo do tópico acima, se torna possível instalar o software no dispositivo móvel. Para fazer isso é simples, utilize do link gerado no Render para acessar a página do projeto. Dentro da página, clique nos três pontos na parte superior direita da tela e selecione a opção 'Instalar Tira Dúvidas...'. Deverá aparecer uma notificação para confirmação de instalação, confirmando a mesma, a PWA será instalada poderá ser acessada por meio do dispositivo.