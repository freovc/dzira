package pl.freo.dzira.model;

import lombok.Data;
import lombok.NonNull;

import java.util.List;

@Data

public class UsersList {
  @NonNull
  List<User> users;
}
