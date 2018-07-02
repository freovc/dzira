package pl.freo.dzira.service;

import org.springframework.stereotype.Service;
import pl.freo.dzira.model.User;
import pl.freo.dzira.repository.UserRepository;

import javax.inject.Inject;
import java.util.List;

@Service
public class UserService {

  private final UserRepository userRepository;

  @Inject
  UserService (UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User createNewUser(User user) {
    return this.userRepository.save(user);
  }
  public List<User> getAllUsers() {
    return this.userRepository.findAll();
  }
}
