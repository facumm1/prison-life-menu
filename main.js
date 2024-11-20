const guardBtn = document.querySelector('.guard_bg');
const inmateBtn = document.querySelector('.inmate_bg');
const menu = document.querySelector('.menu');
const roleVideo = document.querySelector('.role-video');

guardBtn.addEventListener('click', () => {
    menu.style.opacity = '0';

    setTimeout(() => {
        menu.style.display = 'none';

        setTimeout(() => {
            roleVideo.style.display = 'block';

            roleVideo.src = './assets/male_guard_hd.mp4';
    
            roleVideo.load();
        
            roleVideo.play();
        }, 250);
    }, 500);
})

inmateBtn.addEventListener('click', () => {
    menu.style.opacity = '0';

    setTimeout(() => {
        menu.style.display = 'none';

        setTimeout(() => {
            roleVideo.style.display = 'block';

            roleVideo.src = './assets/male_prisonner_hd.mp4';
    
            roleVideo.load();
        
            roleVideo.play();
        }, 250);
    }, 500);
})
