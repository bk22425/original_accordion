document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.accordion-set').forEach(set => {
            set.style.display = set.id === tabId ? 'block' : 'none';
        });
    });
});

document.querySelectorAll('.accordion').forEach(acc => {
    acc.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});
