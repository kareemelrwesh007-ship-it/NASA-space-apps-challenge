function playVideo() {
    const video = document.getElementById('myVideo');
    
    setTimeout(() => {
        video.classList.add('show');
        video.play();
    }, 
    100);
}