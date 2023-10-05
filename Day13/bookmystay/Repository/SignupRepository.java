package com.midhun.bookmystay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.midhun.bookmystay.Entity.Signup;

public interface SignupRepository extends JpaRepository<Signup,Long> {

}
