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
    });

