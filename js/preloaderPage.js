
const d = document;
export function preloaderPage() {
    setTimeout(() => {
        d.querySelector('.is-total-modal').classList.add('is-invisible');
    }, 1200);
}