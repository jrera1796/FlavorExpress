async function deleteFormHandler(event) {
    event.preventDefault();
    console.log('Clicked')
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/recipes/${id}`, { method: 'DELETE' });
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

<<<<<<< Updated upstream:public/javascript/delete-recipe.js
document.querySelector('.delete-recipe-btn').addEventListener('click', deleteFormHandler);
=======
document.getElementById('delete-recipe-btn').addEventListener('click', deleteFormHandler);
>>>>>>> Stashed changes:public/javascript/delete-recipes.js
