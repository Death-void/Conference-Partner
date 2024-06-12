package com.myhuiban.mapper;

import com.myhuiban.model.FollowConference;
import com.myhuiban.model.FollowConferenceDetail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FollowConferenceMapper {

    List<Long> findAllByUserId(Long id);

    int countByConferenceId(Long id);

    void insert(FollowConference followConference);

    void delete(Long id);

    FollowConference find(FollowConference followConference);

    List<FollowConferenceDetail> findTopTen();
}
