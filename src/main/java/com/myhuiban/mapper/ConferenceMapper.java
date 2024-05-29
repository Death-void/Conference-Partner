package com.myhuiban.mapper;

import com.myhuiban.model.Conference;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ConferenceMapper {

    @Select("SELECT * FROM conference")
    List<Conference> findAll();

    @Select("SELECT * FROM conference WHERE id = #{id}")
    Conference findById(Long id);

    @Insert("INSERT INTO conference(uniqueId, name, abbreviation, CCF, CORE, QUALIS, submissionDeadline, notificationDate, conferenceDate, location, frequency) VALUES(#{uniqueId}, #{name}, #{abbreviation}, #{CCF}, #{CORE}, #{QUALIS}, #{submissionDeadline}, #{notificationDate}, #{conferenceDate}, #{location}, #{frequency})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Conference conference);

    @Update("UPDATE conference SET uniqueId=#{uniqueId}, name=#{name}, abbreviation=#{abbreviation}, CCF=#{CCF}, CORE=#{CORE}, QUALIS=#{QUALIS}, submissionDeadline=#{submissionDeadline}, notificationDate=#{notificationDate}, conferenceDate=#{conferenceDate}, location=#{location}, frequency=#{frequency} WHERE id = #{id}")
    void update(Conference conference);

    @Delete("DELETE FROM conference WHERE id = #{id}")
    void delete(Long id);
}
