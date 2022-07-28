const http = require('node:http')
const fs = require('node:fs/promises')

const server = http.createServer(async (req, res) => {

  if (req.method === "GET") {
    switch (req.url) {

      case '/':
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(await fs.readFile('./index.html', 'utf-8'));
        break;

      case '/index.css':
        res.setHeader('Content-Type', 'text/css');
        res.statusCode = 200;
        res.end(await fs.readFile('./index.css', 'utf-8'));
        break;

      case '/reponsivo.css':
        console.log(req)
        res.setHeader('Content-Type', 'text/css');
        res.statusCode = 200;
        res.end(await fs.readFile('./reponsivo.css', 'utf-8'));
        break;

      case '/reponsivo.js':
        res.setHeader('Content-Type', 'text/javascript');
        res.statusCode = 200;
        res.end(await fs.readFile('./reponsivo.js', 'utf-8'))
        break;

      case '/image/hot-coffee.png':
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200;
        res.end(await fs.readFile('./image/hot-coffee.png'))
        break;

      case "/image/Healthy%20vegan%20hot%20chocolate%20recipe%20from%20Bo's%20Kitchen.png":
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200;
        res.end(await fs.readFile("./image/Healthy vegan hot chocolate recipe from Bo's Kitchen.png"))
        break;

      case '/image/coffee-break-1026x500.jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        res.statusCode = 200;
        res.end(await fs.readFile("./image/coffee-break-1026x500.jpg"))
        break;

      case '/image/coffee-shop.png':
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200;
        res.end(await fs.readFile("./image/coffee-shop.png"))
        break;

      case '/image/coffee.png':
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200;
        res.end(await fs.readFile("./image/coffee.png"))
        break;

      case '/image/kisspng-checkbox-computer-icons-check-mark-clip-art-check-box-5b53d85d66e829.6628882815322215334215.png':
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200;
        res.end(await fs.readFile('./image/kisspng-checkbox-computer-icons-check-mark-clip-art-check-box-5b53d85d66e829.6628882815322215334215.png'))
        break;

      case '/image/papel-de-parede-auto-colante-coffee-preto-fundo-branco-papel-de-parede.jpg':
        res.setHeader('Content-Type', 'image/jpg')
        res.statusCode = 200;
        res.end(await fs.readFile('./image/papel-de-parede-auto-colante-coffee-preto-fundo-branco-papel-de-parede.jpg'));
        break;

      case '/image/223kisspng-checkbox-computer-icons-check-mark-clip-art-check-box-5b53d85d66e829.6628882815322215334215.png':
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200;
        res.end(await fs.readFile('./image/223kisspng-checkbox-computer-icons-check-mark-clip-art-check-box-5b53d85d66e829.6628882815322215334215.png'))
        break;

      default:
        res.statusCode = 220;
        res.end();
    }
  }
});

server.listen({ host: 'localhost', port: 8000 }, () => {

  console.log('read')
})