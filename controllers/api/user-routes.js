const router = require('express').Router();
const { User, Rating } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['password'] }
        }).then(dbUserData => res.json(dbUserData))
        .catch(err => { res.status(500).json(err); });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: { id: req.params.id },
        include: [{ //include its associated Rating
                model: Rating,
                attributes: ['id', 'rating_comment', 'rating_score'],
                include: { model: User, attributes: ['username'] }
            }, //include its associated User
            { model: User, attributes: ['username'] }
        ]
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/login', (req, res) => {
    User.findOne({
        where: { email: req.body.email }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

    // pass in req.body instead to only update what's passed through
    User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

// const router = require('express').Router();
// const { User } = require('../../models');
// router.post('/', async(req, res) => {
//     try {
//         const userData = await User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });
//         req.session.save(() => {
//             req.session.loggedIn = true;
//             res.status(200).json(userData);
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });
// router.post('/login', async(req, res) => {
//     try {
//         const userData = await User.findOne({
//             where: {
//                 email: req.body.email,
//             },
//         });
//         if (!userData) {
//             res
//                 .status(400)
//                 .json({
//                     message: 'Incorrect email or password.'
//                 });
//             return;
//         }
//         const validPassword = await userData.checkPassword(req.body.password);
//         if (!validPassword) {
//             res
//                 .status(400)
//                 .json({
//                     message: 'Incorrect email or password.'
//                 });
//             return;
//         }
//         req.session.save(() => {
//             req.session.loggedIn = true;
//             res
//                 .status(200)
//                 .json({
//                     user: userData,
//                     message: 'Logged in!'
//                 });
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });
// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });
// module.exports = router;