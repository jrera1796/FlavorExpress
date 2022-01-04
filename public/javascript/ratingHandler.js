async function ratingHandler(event) {
    event.preventDefault();
<<<<<<< Updated upstream

    const rating_comment = document.querySelector('textarea[name="comment-body"]').value.trim();
=======
    var c1 = document.getElementById("c1");
    var chkbox2 = document.getElementById("c2");
    var chkbox3 = document.getElementById("c3")
    var chkbox1 = document.getElementById("c4");
    var chkbox2 = document.getElementById("c5");
    
    const rating_comment = document.querySelector('textarea[name="rating-body"]').value.trim();
    const rating_score = document.querySelector('input[type="checkbox"').value;
    console.log(rating_score)
>>>>>>> Stashed changes
    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (rating_comment) {
        const response = await fetch('/api/ratings', {
            method: 'POST',
            body: JSON.stringify({
<<<<<<< Updated upstream
                recipe_id,
                rating_comment,
                rating_score
=======
                rating_comment,
                rating_score,
                user_id,
                recipe_id

>>>>>>> Stashed changes
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
<<<<<<< Updated upstream
=======
          debugger;
>>>>>>> Stashed changes
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

<<<<<<< Updated upstream
document.querySelector('.rating-form').addEventListener('submit-rating', ratingHandler);
=======
document.querySelector('.rating-form').addEventListener('submit', ratingHandler);
>>>>>>> Stashed changes
