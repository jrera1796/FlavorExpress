async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="edit-title"]').value.trim();
    const ingredients = document.querySelector('textarea[name="edit-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="edit-direction"]').value.trim();
    const photo_path = document.querySelector('input[name="edit-photo"]').value;
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, ingredients, direction, photo_path }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);