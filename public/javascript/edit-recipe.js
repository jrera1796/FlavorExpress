async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="new-title"]').value;
    const ingredients = document.getElementById('new-ingredients').value;
    const direction = document.getElementById('new-direction').value;
    const fileField = document.querySelector('input[type="file"]');
    const formData = new FormData();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    formData.append('recipe_pic', fileField.files[0]);
    const upload = await fetch('/api/upload/single', {
        method: 'POST',
        body: formData,
    })

    const data = await upload.json()
    const photo_path = data.pathname

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