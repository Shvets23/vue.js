document.addEventListener("DOMContentLoaded",
    () => {
        function hideTabs() {
            let tabs = document.querySelectorAll('.tab-link');
            let tabsItem = document.querySelectorAll('.tab-item');
            for (let i = 0; i < tabsItem.length; i++) {
                tabsItem[i].classList.remove('active-item');
                tabs[i].classList.remove('active-tab');
            }
        }

        let tabs = document.querySelectorAll('.tab-link');

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function (event) {
                hideTabs();
                event.target.classList.add('active-tab');
                document.getElementById('tab' + event.target.getAttribute('data-tab')).classList.add('active-item');
            });
        }

        let aside = document.getElementById('aside');

        aside.addEventListener("click", function (event) {
            if (window.outerWidth <= 992 && aside.classList['value'].indexOf('open-aside') == -1)
                aside.classList.add('open-aside');
        });

        document.addEventListener('click', function (event) {
            if (window.outerWidth <= 992) {
                if (event.target.closest('#aside')) return;
                aside.classList.remove('open-aside');
            }

        });

        let input = document.getElementById('search'),
            searchBtn = document.querySelector('.search-icon');

        searchBtn.addEventListener('click', function () {
            if (input.classList['value'].indexOf('search-show') == -1) {
                input.classList.add('search-show');
            } else {
                if (!input.value) {
                    input.classList.remove('search-show');
                }
            }

        })

        // Add images to activity block

        const images = [
            '/img/img2.jpg',
            '/img/img2.jpg',
            '/img/img2.jpg',
            '/img/img2.jpg',
        ];
        const notification = document.getElementById('notification');

        function createImages() {
            const imagesContainer = document.querySelector('.upload-files');
            images.forEach((el, i) => {
                let imageWrap = document.createElement('div');
                imageWrap.classList.add('img-wrap');

                let img = document.createElement('img');
                img.src = el;
                img.addEventListener("click", () => {
                    notification.innerHTML = i;
                });
                imageWrap.appendChild(img);
                imagesContainer.appendChild(imageWrap);
            })
        }
        
        createImages();

        // Change tasks count

        let completedTasks = 372;
        let openTasks = 5;
        const opened = document.getElementById('open');
        const completed = document.getElementById('completed');
        const confirmText = "Are you sure you want to change the number of tasks?";

        completed.addEventListener('click', () => {
            openTasks ? changeTasksCount() : alert('Sorry, you have no open tasks.');
        })

        function changeTasksCount() {
            if (confirm(confirmText)) {
                completedTasks++;
                openTasks--;
                opened.innerHTML = openTasks;
                completed.innerHTML = completedTasks;
            }
        }
    });

