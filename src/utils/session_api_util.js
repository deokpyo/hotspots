import $ from 'jquery';

export const login = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'admin/login',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: 'delete',
    url: 'api/session',
    success,
    error: () => {
      console.log("Logout error in SessionApiUtil#logout");
    }
  });
};
