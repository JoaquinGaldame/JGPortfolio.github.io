const textoEcommerce = `
  <p>Participé en el desarrollo de un sistema de <strong>Comercio Electrónico Multiempresa</strong>, diseñado para clientes destacados de la ciudad de San Juan, como <strong>Resi</strong> y <strong>Portho</strong>.</p>

  <p>El sistema funcionaba como un <strong>tótem interactivo</strong>, permitiendo a los clientes seleccionar productos, realizar el pago en el momento y generar un <strong>ticket de compra</strong>, que posteriormente se imprimía y convertía en un pedido para ser entregado por los vendedores. Para ello, el sistema contaba con interfaces tanto para el <strong>usuario/cliente</strong> como para el <strong>administrador</strong>.</p>

  <p>Una de las funcionalidades clave fue la integración de <strong>múltiples métodos de pago</strong>, incluyendo pagos en caja y <strong>Mercado Pago a través de Checkout Pro</strong>. Implementé esta integración asegurando una experiencia fluida desde dos perspectivas:</p>

  <ol>
    <li><strong>Desde el tótem</strong>: Se generaba un código QR que el cliente escaneaba con su celular para completar el pago mediante Mercado Pago.</li>
    <li><strong>Desde el dispositivo móvil</strong>: En entornos con mesas enumeradas, cada mesa contaba con un QR que permitía a los clientes acceder al sistema de comercio electrónico desde su celular. Desde allí, podían <strong>llamar al mozo</strong>, realizar un pedido y elegir la forma de pago: <strong>"Pagar en caja"</strong> o <strong>"Pagar con Mercado Pago"</strong>. Si el usuario accedía desde un dispositivo móvil y optaba por Mercado Pago, el sistema detectaba automáticamente la plataforma y habilitaba <strong>Checkout PRO</strong>, optimizando la experiencia de pago.</li>
  </ol>

  <p>Este desarrollo garantizó una solución eficiente y adaptable a las necesidades tanto de los clientes como de los administradores del sistema. Las imágenes que se ven acontinuación son parte de un proyecto duplicado para no exponer ilegalmente información confidencial</p>
`;
const Proyectos = [
  { id:1, name:'Sistema E-commerce', image:'', description:textoEcommerce, tags:[ {name:'Angular 13'},{name:'.NET'},{name:'Tailwind CSS'},{name:'MongoDB'}]},
  { id:2, name:'Terminal de Punto de Venta', image:'', description:'', tags:[ {name:'Angular 9'},{name:'.NET'},{name:'SCSS'},{name:'SQL Server'}]},
  { id:3, name:'Sistema de Monitoreo de Gestión de Proyectos', image:'', description:'', tags:[ {name:'Angular 17'},{name:'.NET'},{name:'Tailwind CSS'},{name:'AWS Services'},{name:'SQL Server'}]},
  { id:4, name:'Sistema de Soluciones ERP', image:'', description:'', tags:[ {name:'JavaScript'},{name:'SCSS'},{name:'.NET'},{name:'SQL Server'}]}
]

const ImagenSlider = [
  { idProyecto: 1, imagenes: [{id:1 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-1.png"},{id:2 ,src:"imagenes/Proyectos/Project-ECommerce/carro-1.png"},{id:3 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-2.png"},{id:4 ,src:"imagenes/Proyectos/Project-ECommerce/Modal-1.png"},{id:5 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-3.png"},{id:6 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-4.png"},]},
  { idProyecto: 2, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo1.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo2.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo3.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo4.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo5.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo6.png"},
    {id:7 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo7.png"},{id:8 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo8.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo9.png"}]},
  { idProyecto: 3, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/Foto-Prototipo-2.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/Foto-Prototipo-2.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/Foto-Prototipo-3.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/MaestroDatos-Ejemplo3.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/MaestroDatos-Ejemplo4.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/MaestroDatos-Ejemplo6.png"},{id:7 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/ReporteCarga-Ejemplo6.png"},{id:8 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/DataCollector-Ejemplo3.png"}]},
  { idProyecto: 4, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-1.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-2.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-3.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-4.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-5.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-6.png"}]}
]

const overlay = document.getElementById('fullscreenOverlay');
const overlayImage = document.getElementById('fullscreenImage');

function cerrarModal(){
  const badge_1 = document.getElementById('badge-1')
  badge_1.classList.add('hidden-modal');
  const badge_2 = document.getElementById('badge-2')
  badge_2.classList.add('hidden-modal');
  const badge_3 = document.getElementById('badge-3')
  badge_3.classList.add('hidden-modal');
  const badge_4 = document.getElementById('badge-4')
  badge_4.classList.add('hidden-modal');
  const badge_5 = document.getElementById('badge-5')
  badge_5.classList.add('hidden-modal');
}

function closeFullscreen() {
  overlay.classList.remove('active');
}



document.addEventListener('DOMContentLoaded', () => {
  const projectModal = document.getElementById('projectModal');
  projectModal.addEventListener('show.bs.modal', (event) => {
    const triggerElement = event.relatedTarget;
    // Leer el parámetro 'data-id'
    const projectId = triggerElement.getAttribute('data-id');
    const badge_1 = document.getElementById('badge-1')
    const badge_2 = document.getElementById('badge-2')
    const badge_3 = document.getElementById('badge-3')
    const badge_4 = document.getElementById('badge-4')
    const badge_5 = document.getElementById('badge-5')
    switch(projectId){
      case "1":
        document.getElementById('projectModalLabel').textContent = Proyectos[0].name;
        document.getElementById('modalProjectDescription').innerHTML = Proyectos[0].description;
        document.getElementById('modalGithubLink').setAttribute('href', 'https://github.com/JoaquinGaldame/Project-Ecommerce');
        //https://github.com/JoaquinGaldame/Project-Ecommerce
        badge_1.textContent = Proyectos[0].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[0].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[0].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[0].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        ImagenSlider[0].imagenes.forEach((item, index) =>{
          let image= document.getElementById(`img-carousel-${index+1}`)
          image.src = item.src
          image.addEventListener('click', () => {
            overlay.classList.add('active');
            overlayImage.src = image.src;
          });
        })
        break;
      case "2":
        document.getElementById('projectModalLabel').textContent = Proyectos[1].name;
        document.getElementById('modalProjectDescription').textContent = Proyectos[1].description;
        badge_1.textContent = Proyectos[1].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[1].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[1].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[1].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        ImagenSlider[1].imagenes.forEach((item, index) =>{
          let image= document.getElementById(`img-carousel-${index+1}`)
          image.src = item.src
          image.addEventListener('click', () => {
            overlay.classList.add('active');
            overlayImage.src = image.src;
          });
        })
        break;
      case "3":
        document.getElementById('projectModalLabel').textContent = Proyectos[2].name;
        document.getElementById('modalProjectDescription').textContent = Proyectos[2].description;
        badge_1.textContent = Proyectos[2].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[2].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[2].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[2].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        badge_5.textContent = Proyectos[2].tags[4].name;
        badge_5.classList.remove('hidden-modal');
        ImagenSlider[2].imagenes.forEach((item, index) =>{
          let image= document.getElementById(`img-carousel-${index+1}`)
          image.src = item.src
          image.addEventListener('click', () => {
            overlay.classList.add('active');
            overlayImage.src = image.src;
          });
        })
        break;
      case "4":
        document.getElementById('projectModalLabel').textContent = Proyectos[3].name;
        document.getElementById('modalProjectDescription').textContent = Proyectos[3].description;
        badge_1.textContent = Proyectos[3].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[3].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[3].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[3].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        ImagenSlider[3].imagenes.forEach((item, index) =>{
          let image= document.getElementById(`img-carousel-${index+1}`)
          image.src = item.src
          image.addEventListener('click', () => {
            overlay.classList.add('active');
            overlayImage.src = image.src;
          });
        })
        break;
      default:
        break;
    }
  });
  document.getElementById("btnViewJobs").addEventListener("click", function() {
    var experencyTab = new bootstrap.Tab(document.getElementById("experency-tab"));
    experencyTab.show();
  });
  document.getElementById("btnviewAboutMe").addEventListener("click", function() {
    var aboutmeTab = new bootstrap.Tab(document.getElementById("aboutme-tab"));
    aboutmeTab.show();
  });
});

