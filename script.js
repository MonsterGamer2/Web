// Example: Show course details in a modal
const courseList = document.querySelector('ul');
const modal = document.getElementById('courseModal');
const closeModalBtn = document.querySelector('.close-modal');

courseList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        // Get course details
        const courseTitle = event.target.textContent;
        const courseDescription = `This is a description for ${courseTitle}`;

        // Update modal content
        modal.querySelector('h2').textContent = courseTitle;
        modal.querySelector('p').textContent = courseDescription;

        // Show the modal
        modal.style.display = 'block';
    }
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
