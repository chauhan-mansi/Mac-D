const adminAuthentication = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({ success: false, message: "Access Denied" });
  }
  next();
};

module.exports = adminAuthentication;
