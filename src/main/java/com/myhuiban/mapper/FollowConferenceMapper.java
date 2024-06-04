package com.myhuiban.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FollowConferenceMapper {

    List<Long> findAllByUserId(Long id);

    int countByConferenceId(Long id);
}
