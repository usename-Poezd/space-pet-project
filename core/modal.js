document.querySelectorAll('.item_wrapper').forEach(item=>{
    item.addEventListener('click',(e)=>{

        document.getElementById('modal_window').className = 'window_modal_show';
        document.getElementById('modal_window_wrapper').className = 'window_modal_wrapper_show';
        const itemClick = state.find(el => el.id == e.target.id);
        const modal_img =  document.getElementById('modal_img');
        const modal_name = document.getElementById('modal_name');
        const modal_text = document.getElementById('modal_text');

        const modal_info = document.querySelector(".modal_info");

        //make data adding automatically
        itemClick.data.map(({title, value}) => {
            const titleDiv = document.createElement("div");
            titleDiv.classList.add("modal_city");
            titleDiv.classList.add("p-1");
            titleDiv.textContent = title;



            const valueDiv = document.createElement("div");
            valueDiv.classList.add("p-1");
            valueDiv.textContent = value;


            modal_info.append(titleDiv);
            modal_info.append(valueDiv);
        });

        modal_img.src = itemClick.foto;
        modal_name.textContent = itemClick.name;


        modal_text.textContent =  itemClick.description;

    });
});

const closeModal = () => {
    document.getElementById('modal_window').className='window_modal_close';
    document.getElementById('modal_window_wrapper').className='window_modal_close';


    //clear info after close
    const modal_info = document.querySelector(".modal_info");
    modal_info.innerHTML = "<div id=\"modal_name\"></div>"
};

document.getElementById('button_close_modal').addEventListener('click',closeModal);

document.getElementById('modal_window_wrapper').addEventListener('click',closeModal);



