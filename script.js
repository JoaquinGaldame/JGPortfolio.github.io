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

const textoSolutionsERP =`
<p>Las soluciones <strong>ERP (Enterprise Resource Planning)</strong> son sistemas de planificación de recursos empresariales que integran y gestionan todos los procesos clave de una empresa en un solo software. Estas soluciones permiten centralizar información, optimizar operaciones y mejorar la toma de decisiones en áreas como finanzas, inventarios, ventas y producción. </p>
<p>Tengo experiencia en desarrollo e integración de ERP He participado en el desarrollo e integración de mejoras en sistemas ERP en fases avanzadas, generando nuevas funcionalidades, optimizando el rendimiento y asegurando el mantenimiento del sistema. Mi trabajo ha incluido:</p>
<ol>
  <li><strong>Desarrollo</strong> de nuevas características y módulos. </li>
  <li><strong>Integración</strong> de software con otros sistemas empresariales. </li>
  <li><strong>Optimización</strong> y <strong>mantenimiento</strong> del sistema existente.</li>
</ol>
<h4>Integraciones destacadas</h4>
<p>Desarrollé e integré diversos módulos clave en un sistema ERP en fases avanzadas, incluyendo algunos como:</p>
<ol>
  <li>Maestro de Zona de Ventas para la administración centralizada de sucursales.</li>
  <li>Libros de Compra y Ventas (Cuentas Contables) permitiendo la gestión eficiente de registros contables.</li>
  <li>Módulo de Cobranzas para el procesamiento de pagos de entidades externas.</li>
</ol>
<p>Estas mejoras permitieron optimizar la gestión empresarial y consolidar la información en un sistema robusto y escalable.</p>
`

const textoProjectMonitoring =`
<p>Participé en el desarrollo desde cero de un sistema frontend para el <strong>Monitoreo de Gestión de Datos</strong> aplicado a proyectos, contratos y productos según las necesidades del cliente.</p>
<p>Contando con la integración aparte de un Data Collector mobile. El sistema incluía:</p>
<ol>
  <li><strong>Visualización de datos y estadísticas:</strong> herramientas interactivas para el análisis de información.</li>
  <li><strong>Reportes de Carga Dinámica:</strong> generación flexible de reportes en tiempo real.</li>
  <li><strong>Maestro de Datos:</strong> creación, modificación y eliminación de registros clave.</li>
  <li><strong>Dashboard general:</strong> panel de control intuitivo para el análisis de datos.</li>
</ol>
`
const textoTPV =`
<p><strong>Terminal Punto de Venta Web (TPV Web)</strong> es un sistema web integral para la gestión comercial que permite el procesamiento de pagos y facturación electrónica, administración de inventario y movimientos de stock, gestión contable y financiera, generación de reportes comerciales</p>
<p>Desarrollé software para la aplicación integrando Front-end, Back-end y Bases de datos con SQL Server adaptable a diversos modelos de negocio, incluyendo</p>
<ol>
  <li>Estaciones de servicio y combustibles</li>
  <li>Comercios minoristas</li>
  <li>Empresas de servicios</li>
</ol>
<h4>Integraciones y funcionalidades destacadas:</h4>
<ol>
  <li><strong>Sistema de reportes avanzado:</strong> Se basa en listados detallados de comprobantes, resúmenes de cierre diario, movimientos de productos e inventario, análisis de ventas por períodos</li>
  <li><strong>Módulo de pagos flexible:</strong> Integración con Mercado Pago y soporte para múltiples medios de pago (efectivo, transferencias, tarjetas)</li>
  <li><strong>Formularios inteligentes:</strong> Diseño de interfaces optimizadas para procesos comerciales, validación en tiempo real de datos y flujos de trabajo personalizables</li>
</ol>
`

const textoMigration =`
<p><strong>Sistema Web</strong> para la gestión de negocios para una empresa de la ciudad de San Juan. Se trata de una migración de una aplicación web realizada en PHP. La idea principal es migrar todo el sistema con Frontend Vue3.js y Backend con Next.js. Actualmente se encuentra en proceso de migración.</p>
`


const Proyectos = [
  { id:1, name:'Sistema E-commerce', image:'', description: textoEcommerce, tags:[ {name:'Angular 13'},{name:'.NET'},{name:'Tailwind CSS'},{name:'MongoDB'}]},
  { id:2, name:'Terminal de Punto de Venta', image:'', description: textoTPV, tags:[ {name:'Angular 9'},{name:'.NET'},{name:'SCSS'},{name:'SQL Server'}]},
  { id:3, name:'Sistema de Monitoreo de Gestión de Proyectos', image:'', description: textoProjectMonitoring, tags:[ {name:'Angular 17'},{name:'.NET'},{name:'Tailwind CSS'},{name:'AWS Services'},{name:'SQL Server'}]},
  { id:4, name:'Sistema de Soluciones ERP', image:'', description: textoSolutionsERP, tags:[ {name:'JavaScript'},{name:'SCSS'},{name:'.NET'},{name:'SQL Server'}]},
  { id:5, name:'CoolSoft Migración', image:'', description: textoMigration, tags:[ {name:'Vue3.js'},{name:'Quasar Framework'},{name:'Nest.js'},{name:'DBeaver'}]}
]

const ImagenSlider = [
  { idProyecto: 1, imagenes: [{id:1 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-1.png"},{id:2 ,src:"imagenes/Proyectos/Project-ECommerce/carro-1.png"},{id:3 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-2.png"},{id:4 ,src:"imagenes/Proyectos/Project-ECommerce/Modal-1.png"},{id:5 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-3.png"},{id:6 ,src:"imagenes/Proyectos/Project-ECommerce/Menu-4.png"},]},
  { idProyecto: 2, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo1.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo2.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo3.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo4.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo5.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo6.png"},
    {id:7 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo7.png"},{id:8 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo8.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-TPV/TPV-prototipo9.png"}]},
  { idProyecto: 3, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/Foto-Prototipo-2.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/Foto-Prototipo-2.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/Foto-Prototipo-3.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/MaestroDatos-Ejemplo3.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/MaestroDatos-Ejemplo4.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/MaestroDatos-Ejemplo6.png"},{id:7 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/ReporteCarga-Ejemplo6.png"},{id:8 ,src:"imagenes/Proyectos/Proyecto-MonitoringManagement/DataCollector-Ejemplo3.png"}]},
  { idProyecto: 4, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-1.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-2.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-3.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-4.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-5.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-SolucionesERP/solucionesERP-6.png"}]},
  { idProyecto: 5, imagenes: [{id:1 ,src:"imagenes/Proyectos/Proyecto-Migration-Vue3/menu-1.png"},{id:2 ,src:"imagenes/Proyectos/Proyecto-Migration-Vue3/page-1.png"},{id:3 ,src:"imagenes/Proyectos/Proyecto-Migration-Vue3/page-2.png"},{id:4 ,src:"imagenes/Proyectos/Proyecto-Migration-Vue3/page-3.png"},{id:5 ,src:"imagenes/Proyectos/Proyecto-Migration-Vue3/page-4.png"},{id:6 ,src:"imagenes/Proyectos/Proyecto-Migration-Vue3/page-5.png"}]}
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
  projectModal.addEventListener('shown.bs.modal', (event) => {
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
        badge_1.textContent = Proyectos[0].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[0].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[0].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[0].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        const githubBtn1 = document.getElementById('modalGithubLink');
        if (githubBtn1) {
          githubBtn1.href = 'https://github.com/JoaquinGaldame/Project-Ecommerce';
          githubBtn1.style.display = 'inline-block'; // Asegurarse que es visible
        }
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
        document.getElementById('modalProjectDescription').innerHTML = Proyectos[1].description;
        badge_1.textContent = Proyectos[1].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[1].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[1].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[1].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        const githubBtn2 = document.getElementById('modalGithubLink');
        if (githubBtn2) {
          githubBtn2.style.display = 'none';
        }
        console.log('esto tiene ImagenSlider  1 ' + JSON.stringify(ImagenSlider[1].imagenes))
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
        document.getElementById('modalProjectDescription').innerHTML = Proyectos[2].description;
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
        const githubBtn3 = document.getElementById('modalGithubLink');
        if (githubBtn3) {
          githubBtn3.style.display = 'none';
        }
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
        document.getElementById('modalProjectDescription').innerHTML = Proyectos[3].description;
        badge_1.textContent = Proyectos[3].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[3].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[3].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[3].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        const githubBtn4 = document.getElementById('modalGithubLink');
        if (githubBtn4) {
          githubBtn4.style.display = 'none';
        }
        ImagenSlider[3].imagenes.forEach((item, index) =>{
          let image= document.getElementById(`img-carousel-${index+1}`)
          image.src = item.src
          image.addEventListener('click', () => {
            overlay.classList.add('active');
            overlayImage.src = image.src;
          });
        })
        break;
      case "5":
        document.getElementById('projectModalLabel').textContent = Proyectos[4].name;
        document.getElementById('modalProjectDescription').innerHTML = Proyectos[4].description;
        badge_1.textContent = Proyectos[4].tags[0].name;
        badge_1.classList.remove('hidden-modal');
        badge_2.textContent = Proyectos[4].tags[1].name;
        badge_2.classList.remove('hidden-modal');
        badge_3.textContent = Proyectos[4].tags[2].name;
        badge_3.classList.remove('hidden-modal');
        badge_4.textContent = Proyectos[4].tags[3].name;
        badge_4.classList.remove('hidden-modal');
        const githubBtn5 = document.getElementById('modalGithubLink');
        if (githubBtn5) {
          githubBtn5.style.display = 'none';
        }
        ImagenSlider[4].imagenes.forEach((item, index) =>{
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





