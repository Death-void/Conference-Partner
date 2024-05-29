package com.myhuiban.mapper;

import com.myhuiban.model.Journal;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface JournalMapper {

    @Select("SELECT * FROM journal")
    List<Journal> findAll();

    @Select("SELECT * FROM journal WHERE id = #{id}")
    Journal findById(Long id);

    @Insert("INSERT INTO journal(uniqueId, name, specialIssue, CCF, submissionDeadline, impactFactor, publisher) VALUES(#{uniqueId}, #{name}, #{specialIssue}, #{CCF}, #{submissionDeadline}, #{impactFactor}, #{publisher})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Journal journal);

    @Update("UPDATE journal SET uniqueId=#{uniqueId}, name=#{name}, specialIssue=#{specialIssue}, CCF=#{CCF}, submissionDeadline=#{submissionDeadline}, impactFactor=#{impactFactor}, publisher=#{publisher} WHERE id = #{id}")
    void update(Journal journal);

    @Delete("DELETE FROM journal WHERE id = #{id}")
    void delete(Long id);
}
