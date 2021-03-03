const Dropdowns = () => {
    window.addEventListener('click', (event ) => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach((el) => {
            const button = el.querySelector('.dropdown-button');
            if (event.target !== button && !button.contains(event.target)) {
                const menu = el.querySelector('.dropdown-menu');
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            }

        });

    });

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((el) => {
        const button = el.querySelector('.dropdown-button');
        const menu = el.querySelector('.dropdown-menu');
        let popperInstance = null;

        function create() {
            const placement = el.classList.contains('dropdown-right') && window.innerWidth >= 1024 ? 'right' : 'bottom-start';

            popperInstance = Popper.createPopper(el, menu, {
                placement,
            });
        }

        const destroy = () => {
            if (popperInstance) {
                popperInstance.destroy();
                popperInstance = null;
            }
        };

        const click = () => {
            if (menu.classList.contains('hidden')) {
                create();
            } else  {
                destroy();
            }
            menu.classList.toggle('hidden');
        };

        const mouseover = () => {
            menu.classList.remove('hidden');
            create();
        };

        const mouseout = () => {
            menu.classList.add('hidden');
            destroy();
        };

        if (el.classList.contains('dropdown-hover')) {
            el.addEventListener('mouseover', mouseover);
            el.addEventListener('mouseout', mouseout);
        } else {
            button.addEventListener('click', click);
        }
    })
};

const Render = () => {
    const headTeg = document.getElementById('wrapper');

    const state = stateData.data;
    const type = stateData.type;

    switch (type) {
        case "stories":
            const mainDiv = document.createElement("div");
            mainDiv.classList.add("flex", "flex-wrap", "justify-center", "story_list");

            state.forEach( item => {
                mainDiv.innerHTML += `
                    <div class="story_list_item">
                        <div class="story_photo">
                            <img src="${item.foto}" alt="" class="img-fluid">
                        </div>
                        <div class="story_text">
                            <p>${item.present}</p>
                            <span class="btn btn-blue modal_trigger" id="${item.id}">Читать</span>
                        </div>
                    </div>
                `
            });

            headTeg.append(mainDiv);
            break;
        default:
            const divHeader = document.createElement('div');

            divHeader.classList.add("flex", "flex-wrap", "justify-center");
            state.forEach(item=>{
                const div = document.createElement('div');
                div.className = 'item_wrapper';
                div.id = item.id;
                const img = document.createElement('img');
                img.src = item.foto;
                img.className='item_img';
                img.id = item.id;

                const divTextName = document.createElement('div');
                divTextName.className = 'item_text_name';
                divTextName.textContent = item.name;
                divTextName.id = item.id;

                const divText = document.createElement('div');
                divText.className = 'item_text';
                divText.textContent = item.present;
                divText.id = item.id;

                div.appendChild(img);
                div.appendChild(divTextName);
                div.appendChild(divText);

                divHeader.appendChild(div);
            });
            headTeg.appendChild(divHeader);
    }


};

const CoreInit = () => {
  Dropdowns();
  Render();
};

CoreInit();
