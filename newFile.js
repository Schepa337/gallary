for (const slide of slides) {
    slide.addEvetListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    });
}
