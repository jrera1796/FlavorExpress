async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="edit-title"]').value.trim();
    const ingredients = document.querySelector('textarea[name="edit-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="edit-direction"]').value.trim();
    const express_hint = document.querySelector('textarea[name="edit-hint"]').value.trim();
    const fileField = document.querySelector('input[type="file"]');
    const formData = new FormData();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    let photo_path = fileField.id;

    console.log(fileField.id);
    console.log(fileField.files);

    if (fileField.files && fileField.files.length > 0) {
        formData.append('recipe_pic', fileField.files[0]);
        const upload = await fetch('/api/upload/single', {
            method: 'POST',
            body: formData,
        })
        const data = await upload.json()
        photo_path = data.pathname
        console.log(data);
    }

    const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, ingredients, direction, express_hint, photo_path }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);