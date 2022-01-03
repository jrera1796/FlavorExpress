async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="new-title"]').value;
    const ingredients = document.querySelector('textarea[name="new-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="new-direction"]').value.trim();
    const photo_path = document.querySelector('input[name="recipe_pic"]').value.split('\\')[2];
    const fileField = document.querySelector('input[type="file"');
    const formData = new FormData();

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ title, ingredients, direction, photo_path }),
        headers: { 'Content-Type': 'application/json' }
    });

    formData.append('recipe_pic', fileField.files[0]);
    await fetch('/api/upload/single', {
        method: 'POST',
        body: formData,
    })

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);