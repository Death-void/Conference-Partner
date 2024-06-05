package com.myhuiban.mapper;

import com.myhuiban.model.Journal;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface JournalMapper {

    List<Journal> findAll();

    Journal findById(Long id);

    void insert(Journal journal);

    void update(Journal journal);

    void delete(Long id);
}
