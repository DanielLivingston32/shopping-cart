// exports.error_404 = (req, res, next) => {
//   res.status(404).render('not-found', { docTitle: '404 Error' });
// };

exports.get404 = (req, res, next) => {
  res.status(404).render('not-found', {
    docTitle: 'Page Not Found',
    path: '/404',
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn,
  });
};
