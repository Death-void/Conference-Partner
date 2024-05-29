package com.myhuiban.mapper;

import com.myhuiban.model.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM user WHERE username = #{username}")
    User findByUsername(String username);

    @Insert("INSERT INTO user(uniqueId, name, email, institution, registrationTime, password) VALUES(#{uniqueId}, #{name}, #{email}, #{institution}, #{registrationTime}, #{password})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(User user);
}
