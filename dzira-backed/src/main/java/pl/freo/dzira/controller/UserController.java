package pl.freo.dzira.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.freo.dzira.model.User;
import pl.freo.dzira.model.UsersList;
import pl.freo.dzira.service.UserService;

import javax.inject.Inject;
import javax.validation.Valid;

@RestController

public class UserController {


  private final UserService userService;

  @Inject
  UserController (UserService userService) {
    this.userService = userService;
  }
  @PostMapping(value = "/users")
  ResponseEntity<User> createUser(@Valid @RequestBody User user, BindingResult bindingResult) {
    ResponseEntity<User> response;
    User newUser;
    if (bindingResult.hasErrors()) {
      response = new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
    } else {
      newUser = this.userService.createNewUser(user);
      response = ResponseEntity.status(201).contentType(MediaType.APPLICATION_JSON).body(newUser);
    }
    return response;
  }

  @GetMapping
  UsersList simpoleGet() {
    return new UsersList(this.userService.getAllUsers());
  }
}
