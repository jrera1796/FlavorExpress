async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="new-title"]').value;
    const ingredients = document.querySelector('textarea[name="new-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="new-direction"]').value.trim();
    const fileField = document.querySelector('input[type="file"]');
    const formData = new FormData();

    formData.append('recipe_pic', fileField.files[0]);
    const upload = await fetch('/api/upload/single', {
        method: 'POST',
        body: formData,
    })

    const data = await upload.json()
    const photo_path = data.pathname

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ title, ingredients, direction, photo_path }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);