package br.com.season.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.season.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("SELECT CASE WHEN COUNT(u) > 0 THEN 'true' ELSE 'false' END FROM User u WHERE u.name = ?1")
    public Boolean isUserExist(String name);
}
