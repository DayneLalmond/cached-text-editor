const butInstall = document.getElementById('buttonInstall');

// button to install is displayed making the app available to install
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false)
});

// the event for app installation process
butInstall.addEventListener('click', async () => {
    const installEvent = window.deferredPrompt
    if (!installEvent) {return}
    installEvent.prompt()
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true)
});

// app is installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
