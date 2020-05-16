module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_message', 'Please log in to view this resource');
    res.redirect('/users/login');
  },
};
