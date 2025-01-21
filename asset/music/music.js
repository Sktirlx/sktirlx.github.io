const musicPlayer = document.getElementById('musicPlayer');
const playPauseButton = document.getElementById('playPauseButton');


// 在用户点击页面时尝试自动播放音乐
document.addEventListener('click', () => {
    musicPlayer.play().catch(error => {
        // 如果自动播放失败，可能是因为用户没有与页面进行交互
        console.log('自动播放失败:', error);
    });
});