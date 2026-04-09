export function getDefaultPathForRole(role) {
  if (role === "VENDOR") {
    return "/vendor";
  }

  if (role === "CLIENT") {
    return "/client";
  }

  if (role === "ADMIN") {
    return "/admin";
  }

  return "/";
}

export function getDefaultPathForUser(user) {
  return getDefaultPathForRole(user?.role);
}
