package pl.freo.dzira.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.freo.dzira.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
