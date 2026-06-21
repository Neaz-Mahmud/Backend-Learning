const requireAuth = (req, res, next) => {
  if (req.path === "/signup" || req.path === "/login") {
    if (req.session.isLoggedIn) return res.redirect("/");
    return next();
  }

  if (req.session && req.session.isLoggedIn) {
    return next();
  }
  return res.redirect("/signup");
};

module.exports = { requireAuth };
