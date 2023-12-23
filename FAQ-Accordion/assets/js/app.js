const faqItems = document.querySelectorAll('.faq-items');

function toggleIcons(item, isActive) {
  const minusIcon = item.querySelector('.minusIcon');
  const plusIcon = item.querySelector('.plusIcon');

  minusIcon.style.display = isActive ? 'block' : 'none';
  plusIcon.style.display = isActive ? 'none' : 'block';
}

faqItems.forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
    const wasActive = faqItem.classList.contains('active');

    faqItems.forEach((item) => {
      item.classList.remove('active');
      toggleIcons(item, false);
    });

    if (!wasActive) {
      faqItem.classList.add('active');
      toggleIcons(faqItem, true);
    }
  });
});
