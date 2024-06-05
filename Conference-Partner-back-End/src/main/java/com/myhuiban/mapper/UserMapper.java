package com.myhuiban.mapper;

import com.myhuiban.model.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {

    User findByUsername(String username);

    void insert(User user);
}
