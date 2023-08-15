// Crear la vista del getListStudents
const studentsViewList = (resp) => {
    const listado = document.getElementById("listStudents");
    const fragment = new DocumentFragment();
    const tem = document.getElementById("templateList").content;
    //console.log(tem);
    resp.forEach(element => {
      tem.querySelector("li").textContent = element;
      const miElemento = tem.cloneNode(true);
      fragment.appendChild(miElemento);
    });
    listado.appendChild(fragment);
  }
  
  const insertTitleList = () => {
    const listado = document.getElementById("listDataStudent");
    const title = document.createElement("h2");
    title.innerHTML = "<strong>Listado de Estudiantes</strong>";
    listado.insertAdjacentElement("afterbegin", title);
  }
  
  export { studentsViewList, insertTitleList };