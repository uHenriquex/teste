window.dataLayer = window.dataLayer || [];

var videoElement = document.querySelector('#métrica-vídeo');

if (videoElement) {
    videoElement.addEventListener('play', function() {
        window.dataLayer.push({
            'event': 'videoIniciado',
            'videoId': 'métrica-vídeo'
        });
    });

    videoElement.addEventListener('timeupdate', function() {
        var currentTime = videoElement.contentWindow.document.querySelector('video').currentTime;
        var duration = videoElement.contentWindow.document.querySelector('video').duration;

        if (currentTime >= duration * 0.2 && currentTime < duration * 0.21) {
            window.dataLayer.push({ 'event': 'video20Percent', 'videoId': 'métrica-vídeo' });
        }
        if (currentTime >= duration * 0.5 && currentTime < duration * 0.51) {
            window.dataLayer.push({ 'event': 'video50Percent', 'videoId': 'métrica-vídeo' });
        }
        if (currentTime >= duration * 0.75 && currentTime < duration * 0.76) {
            window.dataLayer.push({ 'event': 'video75Percent', 'videoId': 'métrica-vídeo' });
        }
        if (currentTime >= duration - 1) {
            window.dataLayer.push({ 'event': 'videoConcluido', 'videoId': 'métrica-vídeo' });
        }
    });
}
