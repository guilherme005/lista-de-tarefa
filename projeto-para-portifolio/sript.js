const InputTxt = document.getElementById('inputText');
const NivelImport = document.getElementById('importante');
const adicionarlist = document.getElementById('ButtonAdd');
const form = document.querySelector('form');
const date = document.getElementById('inputDate')

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 
});

adicionarlist.addEventListener("click", () => {
    if (InputTxt.value !== '') {
        const localList = document.getElementById('lists')
        localList.style.display='block'
        const li = document.createElement('li');
        const addlist = document.getElementById('addlist');
        li.innerHTML = `<a href="" class="lijs">Tarefa</a> : ${InputTxt.value}<br>
        <a href="" class="lijs">Data</a> : ${date.value}<br>
        <a href="" class="import"> ${NivelImport.value} </a><br>
        <button class="RemoveList">Remover</button>`
         NivelImport.value = '';
        addlist.appendChild(li);
        InputTxt.value = '';
        InputTxt.focus();

        const buttonRemove = li.querySelector('.RemoveList')
        buttonRemove.addEventListener("click", () =>{
            li.remove()
        })
    }else if(InputTxt.value === ''){
        window.alert('Preencha todos os campos !!!')
    }

});
