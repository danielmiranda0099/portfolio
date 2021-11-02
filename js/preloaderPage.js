
const d = document;
export function preloaderPage() {
    window.onload = function () {
        d.querySelector('.is-total-modal').classList.add('is-invisible');
    }
}