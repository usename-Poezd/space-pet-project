document.querySelectorAll('.item_wrapper').forEach(item=>{
    item.addEventListener('click',(e)=>{
        document.getElementById('modal_window').className = 'window_modal_show';
        document.getElementById('modal_window_wrapper').className = 'window_modal_wrapper_show';

        const itemClick = state.filter((el)=>{
            return el.id == e.target.id;
        });

        const modal_img =  document.getElementById('modal_img');
        const modal_name = document.getElementById('modal_name');
        const modal_date = document.getElementById('modal_date');
        const modal_text = document.getElementById('modal_text');
        const modal_city = document.getElementById('modal_city');

        modal_img.src = itemClick[0].foto;
        modal_name.textContent = itemClick[0].name;
        modal_date.textContent = itemClick[0].data.date;
        modal_city.textContent = itemClick[0].data.city;
        modal_text.textContent =  itemClick[0].data.info;

    });
});

document.getElementById('button_close_modal').addEventListener('click',()=>{
    document.getElementById('modal_window').className='window_modal_close'
    document.getElementById('modal_window_wrapper').className='window_modal_close'
});

document.getElementById('modal_window_wrapper').addEventListener('click',()=>{
    document.getElementById('modal_window').className='window_modal_close'
    document.getElementById('modal_window_wrapper').className='window_modal_close'
});


