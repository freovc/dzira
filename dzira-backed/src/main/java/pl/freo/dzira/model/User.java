package pl.freo.dzira.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "DZIRA_USERS")
@Data
@NoArgsConstructor
public class User {
  @Id @GeneratedValue
  Long id;
  @NotBlank
  String fullName;
  @Email
  String email;
  @NotBlank
  @Size(min = 8)
  String password;
  String photo;
  String role;

}
