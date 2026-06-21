const getLogin = (req, res) => {
  if (req.session && req.session.isLoggedIn) {
    return res.redirect("/");
  }
  res.render("authentication/login", { error: null, email: "" });
};

const postLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.render("login", {
      error: "Please fill in all fields.",
      email: email || "",
    });
  }

  // Simple validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.render("login", {
      error: "Please enter a valid email address.",
      email,
    });
  }

  if (password.length < 6) {
    return res.render("login", {
      error: "Password must be at least 6 characters long.",
      email,
    });
  }

  // Set session variables
  req.session.isLoggedIn = true;
  req.session.email = email;

  req.session.save((err) => {
    if (err) {
      console.error("Session save error:", err);
      return res.render("login", {
        error: "An error occurred. Please try again.",
        email,
      });
    }
    res.redirect("/");
  });
};

const postLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Session destroy error:", err);
    }
    res.redirect("/login");
  });
};

//handling all sign up
const getsignup = (req, res) => {
  console.log("get sign up e eshechi");
  res.render("authentication/signup", { error: null, email: "" });
};

module.exports = {
  getLogin,
  postLogin,
  postLogout,
  getsignup,
};
