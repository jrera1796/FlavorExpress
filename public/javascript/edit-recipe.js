async function editFormHandler(event) {
    event.preventDefault();

    const ingredient = document.querySelector('textarea[name="post-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="post-direction"]').value.trim();
    const photo_url = document.querySelector('input[name="post-url"]').value;
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ingredient, direction, photo_url }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);