const url = 'https://api.spacexdata.com/v3/launches'
document.addEventListener('DOMContentLoaded',getDatos)
async function getDatos() {
    try {
        const response = await fetch(url)
        const result = await response.json();
        console.log(result);
        showLanzamientos(result)
       } catch (error) {
        console.log(error);
   }
    }

const contenido = document.querySelector('.tarjetas')
function showLanzamientos(result) {
    result.forEach(lanzamiento => {
        const {mission_name,launch_year,links,rocket,launch_success}=lanzamiento
        const lanzamientoHTML= document.createElement("p");
    lanzamientoHTML.innerHTML=`
    <div class="card" style="width: 30rem;">
        <img src="${links.mission_patch_small}" class="card-img-top"
        <div class="card-body">
            <h5 class="card-title">${mission_name}</h5>
            <p class="text-secondary">${launch_year}</p>
            <button type="button" class="btn btn-primary btn12" data-bs-toggle="modal" data-bs-target="#exampleModal"}>
                More Details (video)
                </button> 
        </div>
    </div> 
    <!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">SPACE X</h5>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="mymodal">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
    
    `
    const detailsButton = lanzamientoHTML.querySelector('.btn12');
    detailsButton.addEventListener('click',()=>{
      const mymodal=document.querySelector('#mymodal')
      mymodal.innerHTML=`
      <h5>Space Exploration Technologies Corp</h5>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <tbody class="table-dark">
          <tr>
              <th class="align-middle">Cohete</th>
              <td class="align-middle text-primary">${rocket.rocket_name}</td>
          </tr>
          <tr>
              <th class="align-middle">Tipo Cohete</th>
              <td class="align-middle text-primary">${rocket.rocket_type}</td>
          </tr>
          <tr>
              <th class="align-middle">Exito Lanzamiento</th>
              <td class="align-middle text-primary">${launch_success}</td>
           </tr>
  
        </tbody>

     </table>
   </div>`
            
    })
    contenido.appendChild(lanzamientoHTML)
})
}

