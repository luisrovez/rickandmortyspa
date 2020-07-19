// Importamos los archivos necesarios para crear las rutas a los templates y pages
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// Creamos el objeto que se encargara de guardas las rutas para cada page
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
}

// Creamos el manejador (router) que se encargara de mostrar los elementos segun la logica establecida
// Aquí trabajaremos de el como vamos a obtener valores del navegador y como vamos estructurarlo
// y saber cuales es la ruta en la cual, el usuario, a querido moverse
const router = async () =>{
  const header  = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  
  header.innerHTML = await Header();
  let hash = getHash();
  let route = await  resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

}

export default router;